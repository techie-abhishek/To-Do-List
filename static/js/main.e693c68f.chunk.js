(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{35:function(t,e,o){},36:function(t,e,o){},47:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),s=o(11),a=o.n(s),i=(o(35),o(20)),l=(o(36),o(28)),d=o(62),r=o(27),u=o.n(r),j=o(2);function b(t){var e=t.inputText,o=t.setInputText,c=t.todos,n=t.setTodos,s=t.setStatus;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{value:e,onChange:function(t){console.log(t.target.value),o(t.target.value)},type:"text",className:"todo-input"}),Object(j.jsx)(d.a,{onClick:function(t){t.preventDefault(),n([].concat(Object(l.a)(c),[{text:e,completed:!1,id:1e3*Math.random()}])),o("")},style:{backgroundColor:"#3385ff",color:"white",height:"54px",fontSize:"25px"},className:"todo-button {classes.button}",type:"submit",variant:"contained",size:"large",startIcon:Object(j.jsx)(u.a,{}),children:"Add"}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"incomplete",children:"Incomplete"})]})})]})})}var f=o(25);function O(t){var e=t.text,o=t.todo,c=t.todos,n=t.setTodos;return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":" "),children:e}),Object(j.jsx)("button",{onClick:function(){n(c.map((function(t){return t.id===o.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(j.jsx)("i",{className:"fas fa-check"})}),Object(j.jsx)("button",{onClick:function(){n(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}function m(t){var e=t.filteredTodos,o=t.todos,c=t.setTodos;return console.log(o),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"todo-container",children:Object(j.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(j.jsx)(O,{setTodos:c,todos:o,todo:t,text:t.text},t.id)}))})})})}var p=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(i.a)(s,2),l=a[0],d=a[1],r=Object(c.useState)("all"),u=Object(i.a)(r,2),f=u[0],O=u[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),h=x[0],g=x[1];Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){v(),N()}),[l,f]);var v=function(){switch(f){case"completed":g(l.filter((function(t){return!0===t.completed})));break;case"incomplete":g(l.filter((function(t){return!1===t.completed})));break;default:g(l)}},N=function(){localStorage.setItem("todos",JSON.stringify(l))},S=function(){null===localStorage.getItem("todos")?localStorage.setItem("toods",JSON.stringify([])):d(JSON.parse(localStorage.getItem("todos")))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"My to do list"})}),Object(j.jsx)(b,{inputText:o,todos:l,setInputText:n,setTodos:d,setStatus:O}),Object(j.jsx)(m,{filteredTodos:h,setTodos:d,todos:l})]})},x=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,63)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.e693c68f.chunk.js.map