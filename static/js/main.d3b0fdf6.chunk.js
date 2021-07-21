(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{72:function(t,e,a){},74:function(t,e,a){"use strict";a.r(e);var c=a(0),o=a.n(c),n=a(11),i=a.n(n),s=a(16),r=a(12),l=a(13),d=a(113),j=a(9),b=a(100),u=a(102),m=a(115),p=a(98),O=a(14),f=a(103),h=a(47),g=a.n(h),x=a(2);var v=function(t){var e=t.searchItems,a=t.resetSearch,o=t.resetIntoFalseSearch,n=Object(c.useRef)(null);Object(c.useEffect)((function(){a&&(n.current.value="",o())}));var i=Object(p.a)((function(t){var e;return{grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:(e={display:"none"},Object(j.a)(e,t.breakpoints.up("sm"),{display:"block"}),Object(j.a)(e,"fontWeight","bold"),e),search:Object(j.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(O.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(j.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(j.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})}}))();return Object(x.jsx)("div",{className:i.grow,children:Object(x.jsx)(b.a,{position:"static",className:"app-bar",children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(f.a,{className:i.title,variant:"h6",noWrap:!0,children:"Item List App"}),Object(x.jsxs)("div",{className:i.search,children:[Object(x.jsx)("div",{className:i.searchIcon,children:Object(x.jsx)(g.a,{})}),Object(x.jsx)(m.a,{onChange:e,placeholder:"\u041f\u043e\u0438\u0441\u043a",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},inputRef:n})]}),Object(x.jsx)("div",{className:i.grow}),Object(x.jsx)("div",{style:{color:"#3f51b5"},children:"\u0421\u0430\u043d\u044f, \u0445\u0443\u0439 \u0441\u043e\u0441\u0430\u043b?"})]})})})},_=a(105),N=a(106),k=a(114),y=a(110),S=a(104),I=a(107),C=a(108),w=a(109),T=a(111),R=a(112),J=o.a.forwardRef((function(t,e){return Object(x.jsx)(_.a,Object(s.a)({direction:"down",ref:e},t))}));var F=function(t){var e=t.todo,a=t.toggleTask,n=t.removeTask,i=t.editTask,s=o.a.useState(!1),r=Object(l.a)(s,2),d=r[0],j=r[1],b=Object(c.useState)(e.task.headerInput),u=Object(l.a)(b,2),p=u[0],O=u[1],f=Object(c.useState)(e.task.bodyInput),h=Object(l.a)(f,2),g=h[0],v=h[1],_=function(){j(!1)},F=function(t){var c=t.complete;return Object(x.jsx)(N.a,{className:e.complete?"item-todo__icon-button item-todo__delete ignore-elements":"item-todo__icon-button item-todo__done ignore-elements",onClick:function(t){t.stopPropagation(),a(e.id)},children:c?Object(x.jsx)(I.a,{className:"item-todo__icon"}):Object(x.jsx)(C.a,{className:"item-todo__icon"})})};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:e.complete?"item-todo item-todo__complete":"item-todo",onClick:function(){j(!0)},children:[Object(x.jsx)("div",{className:"item-todo__header",children:e.task.headerInput}),Object(x.jsx)("div",{className:"item-todo__body",children:e.task.bodyInput}),Object(x.jsxs)("div",{className:"item-todo__tools",children:[Object(x.jsx)(N.a,{className:"item-todo__delete",onClick:function(){return n(e.id)},children:Object(x.jsx)(w.a,{className:"item-todo__icon"})}),Object(x.jsx)(F,{onClick:function(t){return t.preventDefault()},complete:e.complete})]})]}),Object(x.jsx)(k.a,{open:d,TransitionComponent:J,onClose:_,children:Object(x.jsx)(y.a,{children:Object(x.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),""!==p.trim()||""!==g.trim()){var a={headerInput:p,bodyInput:g};i(e.id,a),_()}},className:"dialog-form",children:Object(x.jsxs)("div",{className:"dialog-form__textblock",children:[Object(x.jsx)(m.a,{value:p,type:"text",onChange:function(t){O(t.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"dialog-form__input"}),Object(x.jsx)(S.a,{className:"dialog-form__textarea",onChange:function(t){v(t.target.value)},value:g,type:"text",placeholder:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430..."}),Object(x.jsxs)("div",{className:"dialog-form__tools",children:[Object(x.jsx)(N.a,{onClick:_,variant:"contained",type:"button",children:Object(x.jsx)(T.a,{className:"dialog-form__cancel"})}),Object(x.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:Object(x.jsx)(R.a,{})})]})]})})})})]})};var L=function(t){var e=t.addTask,a=t.toggleForm,o=Object(c.useState)(""),n=Object(l.a)(o,2),i=n[0],s=n[1],r=Object(c.useState)(""),d=Object(l.a)(r,2),j=d[0],b=d[1];return Object(x.jsx)("form",{onSubmit:function(t){t.preventDefault();var a={headerInput:i,bodyInput:j};""===i.trim()&&""===j.trim()||(e(a),s(""),b(""))},className:"todo-form",children:Object(x.jsxs)("div",{className:"todo-form__textblock",children:[Object(x.jsx)(m.a,{value:i,type:"text",onChange:function(t){s(t.currentTarget.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"todo-form__input"}),Object(x.jsx)(S.a,{className:"todo-form__textarea",onChange:function(t){b(t.currentTarget.value)},value:j,type:"text",placeholder:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430..."}),Object(x.jsxs)("div",{className:"todo-form__tools",children:[Object(x.jsx)(N.a,{onClick:a,variant:"contained",type:"button",children:Object(x.jsx)(T.a,{className:"todo-form__cancel"})}),Object(x.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:Object(x.jsx)(R.a,{})})]})]})})},D=a(48);var E=function(){var t=Object(c.useState)(JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[]),e=Object(l.a)(t,2),a=e[0],o=e[1],n=Object(c.useState)(a||[]),i=Object(l.a)(n,2),j=i[0],b=i[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),p=m[0],O=m[1],f=Object(c.useState)(!1),h=Object(l.a)(f,2),g=h[0],_=h[1],N=function(t){if(O(p=!p),t){var e={id:Math.random().toString(36).substr(2,9),task:t,complete:!1};o([].concat(Object(r.a)(a),[e])),b([].concat(Object(r.a)(a),[e])),localStorage.setItem("todos",JSON.stringify([].concat(Object(r.a)(a),[e]))),_(!g)}},k=function(t,e){if(e){var c=Object(r.a)(a.map((function(a){return a.id===t?Object(s.a)(Object(s.a)({},a),{},{task:e}):Object(s.a)({},a)})));o(c),b(c),localStorage.setItem("todos",JSON.stringify(c)),_(!g)}},y=function(){O(p=!p)},S=function(t){var e=Object(r.a)(a.filter((function(e){return e.id!==t})));o(e),b(e),localStorage.setItem("todos",JSON.stringify(e))},I=function(t){var e=Object(r.a)(a.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{complete:!e.complete}):Object(s.a)({},e)})));o(e);var c=Object(r.a)(j.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{complete:!e.complete}):Object(s.a)({},e)})));b(c),localStorage.setItem("todos",JSON.stringify(e))},C=function(){return p?Object(x.jsx)(L,{addTask:N,toggleForm:y}):Object(x.jsx)("div",{className:"create-button",children:Object(x.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){O(p=!p)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})})};return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(v,{searchItems:function(t){var e=t.target.value.trim();j=Object(r.a)(a.filter((function(t){return t.task.headerInput.includes(e)||t.task.bodyInput.includes(e)}))),b(j)},resetSearch:g,resetIntoFalseSearch:function(){_(!1)}}),Object(x.jsx)(C,{}),Object(x.jsx)(D.ReactSortable,{list:j,setList:b,animation:250,className:"sorted-list",preventOnFilter:!0,filter:".ignore-elements",onEnd:function(){var t;b(t=j),localStorage.setItem("todos",JSON.stringify(t))},children:j.map((function(t){return Object(x.jsx)(F,{todo:t,toggleTask:I,removeTask:S,editTask:k},t.id)}))})]})};a(72);i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d3b0fdf6.chunk.js.map