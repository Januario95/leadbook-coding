(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(8),o=n.n(a),r=(n(13),n(2)),i=n(3),l=(n.p,n(0)),j=n(7),u=new i.a,d=function(e){var t=e.data,n=t.id,c=t.name,a=(t.email,t.address),o=t.employee_size,i=t.phone_number,j=t.website,d=t.is_favorite,h=t.logo,b=Object(s.useState)(""),f=Object(r.a)(b,2),m=(f[0],f[1],Object(s.useState)(d)),O=Object(r.a)(m,2),p=O[0],x=O[1];Object(s.useEffect)((function(){document.querySelector(".serch-field").focus()}),[]);var g=function(e){fetch("/api/set_is_favorite/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":u.get("csrftoken")},credentials:"same-origin",body:JSON.stringify({isFavorite:e,id:n})}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},v=function(){p?(x(!1),g(!1)):(x(!0),g(!0))};return Object(l.jsxs)("div",{className:"job-container",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{src:h,alt:""})}),Object(l.jsxs)("div",{className:"part1",children:[Object(l.jsxs)("div",{className:"company",children:[Object(l.jsx)("span",{className:"cname",children:c}),p&&Object(l.jsx)("span",{className:"featured",children:"Favorite"})]}),Object(l.jsx)("div",{className:"position",children:a}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("span",{children:[o," Employees"]}),Object(l.jsx)("span",{children:"\xa0\u2022\xa0"}),Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{class:"fas fa-phone"}),Object(l.jsxs)("a",{href:"tel:".concat(i),children:["\xa0",i]})]}),Object(l.jsx)("span",{children:"\xa0\u2022\xa0"}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:j,target:"_blank",children:j})})]})]}),Object(l.jsx)("div",{className:"part2",children:p?Object(l.jsx)("span",{onClick:v,className:"second",children:"Favorite"}):Object(l.jsx)("span",{onClick:v,className:"first",children:"Not Favorite"})})]})},h=function(e){var t=e.data;return Object(l.jsx)("div",{className:"companies",children:t.map((function(e){return Object(l.jsx)(d,{data:e},e.id)}))})},b=new i.a,f=function(e){e.whoami;var t=e.logout,n=Object(s.useState)([]),c=Object(r.a)(n,2),a=c[0],o=c[1],i=Object(s.useState)(""),u=Object(r.a)(i,2),d=u[0],f=u[1],m=function(){fetch("/api/company/",{credentials:"same-origin"}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){o(e)}))};Object(s.useEffect)((function(){m()}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"header-container",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("input",{type:"text",className:"serch-field",placeholder:"Search for a company",onChange:function(e){return function(e){f(e)}(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){""!==d&&fetch("/api/search_company/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.get("csrftoken")},credentials:"same-origin",body:JSON.stringify({search:d})}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){var t=e.companies;if(t.length>0){var n,s=Object(j.a)(t);try{for(s.s();!(n=s.n()).done;){var c=n.value,a="media/"+c.logo;c.logo=a}}catch(r){s.e(r)}finally{s.f()}console.log(t),o(t)}else o([]),console.log(e.companies)})).catch((function(e){console.log(e)}))},children:"Search"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){fetch("/api/favorite/",{credentials:"same-origin"}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){var t,n=e.favorite,s=Object(j.a)(n);try{for(s.s();!(t=s.n()).done;){var c=t.value,a="media/"+c.logo;c.logo=a}}catch(r){s.e(r)}finally{s.f()}o(e.favorite)})).catch((function(e){return console.log(e)}))},children:"Favorite Companies"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:m,children:"Clear"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:t,children:"Logout"})]})}),Object(l.jsx)("div",{className:"header-container",children:Object(l.jsx)(h,{data:a})})]})},m=new i.a,O=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),i=o[0],j=o[1],u=Object(s.useState)(""),d=Object(r.a)(u,2),h=d[0],b=d[1],O=Object(s.useState)(!1),p=Object(r.a)(O,2),x=p[0],g=p[1],v=Object(s.useState)(!1),N=Object(r.a)(v,2);N[0],N[1];Object(s.useEffect)((function(){y()}),[]);var y=function(){fetch("/api/session/",{credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){console.log(e),e.isAuthenticated?g(!0):g(!1)})).catch((function(e){return console.log(e)}))};return x?Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(f,{whoami:function(){fetch("/api/whoami/",{headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){console.log("You are logged in as: "+e.username)})).catch((function(e){return console.log(e)}))},logout:function(){fetch("/api/logout/",{credentials:"same-origin"}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){console.log(e),g(!1)})).catch((function(e){return console.log(e)}))}})})}):Object(l.jsxs)("div",{className:"container mt-3",children:[Object(l.jsx)("h1",{children:"React Cookie Auth"}),Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/login/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":m.get("csrftoken")},credentials:"same-origin",body:JSON.stringify({username:n,password:i})}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){g(!0),c(""),j(""),b("")})).catch((function(e){console.log(e),b("Wrong username or password")}))},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:n,onChange:function(e){c(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:i,onChange:function(e){j(e.target.value)}}),Object(l.jsx)("div",{children:h&&Object(l.jsx)("small",{className:"text-danger",children:h})})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary mr-3",children:"Login"})]})]})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3f93c1ed.chunk.js.map