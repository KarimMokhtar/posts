(this["webpackJsonpb-task"]=this["webpackJsonpb-task"]||[]).push([[0],{197:function(e,t,n){e.exports=n(364)},223:function(e,t,n){},361:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),o=n.n(c),u=n(49),l=n(73),i=n(21),s=n(53),p=n.n(s),E=n(80),d=n(369),S=n(368),b=n(366),f=n(193),T=n(186),m=n.n(T).a.create({baseURL:"https://jsonplaceholder.typicode.com",headers:{"Content-Type":"application/json",Accept:"application/json"}}),O=function(e){return m({url:"/posts/".concat(e),method:"GET"})},g=function(e){return m({url:"/posts/".concat(e),method:"DELETE"})},y=function(e){return m({url:"/posts",method:"POST",data:e})},j=function(e){return{payload:e,type:"DELETE_POSTS_SUCCESS"}},P=function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"DELETE_POSTS_START"}),t.prev=1,t.next=4,g(e);case 4:return f.b.success("Post deleted successfully!"),t.abrupt("return",n(j(e)));case 8:return t.prev=8,t.t0=t.catch(1),f.b.success("Something went wrong..."),t.abrupt("return",n({payload:"Something went wrong...",type:"DELETE_POSTS_FAILURE"}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},_=n(56),v=(n(223),function(){var e=Object(a.useState)(1),t=Object(_.a)(e,2),n=t[0],c=t[1],o=Object(u.c)((function(e){return{pagination:e.pagination}})).pagination,l=Object(u.b)();Object(a.useEffect)((function(){o.currPage>=n+6&&c(o.currPage)}),[o.currPage]);return o.total<11?null:r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{onClick:function(){1!==n&&c((function(e){return e-1}))}},"\xab"),function(e,t,n,a){var c=[],o=6+e;o>a&&(o=a);for(var u=function(e){c.push(r.a.createElement("div",{onClick:function(){return n(e)},key:e,className:t===e?"active":""},e))},l=e;l<o;++l)u(l);return c}(n,o.currPage,(function(e){l(function(e){return{payload:e,type:"CHANGE_PAGE"}}(e))}),o.totalPages),r.a.createElement("div",{onClick:function(){6+n>=o.totalPages||c((function(e){return e+1}))}},"\xbb"))}),h=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return{posts:e.posts.posts,pagination:e.pagination}})),n=t.posts,c=t.pagination;Object(a.useEffect)((function(){e(function(){var e=Object(E.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_POSTS_START"}),e.prev=1,e.next=4,m({url:"/posts",method:"GET"});case 4:return n=e.sent,e.abrupt("return",t({payload:n.data,type:"GET_POSTS_SUCCESS"}));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t({payload:"Something went wrong...",type:"GET_POSTS_FAILURE"}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){if(n.length){var t=n.length,a=Math.ceil(t/10),r=c.currPage;r>a&&r--,e({payload:{total:t,totalPages:a+1,currPage:r},type:"INITIATE_PAGES"})}}),[e,n,c.currPage]);var o=function(){var t=Object(E.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(P(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=[{title:"Title",dataIndex:"title",key:"title",render:function(e,t){return r.a.createElement(l.b,{to:"/post/".concat(t.id)},e)}},{title:"Description",dataIndex:"body",key:"body"},{title:"Action",key:"action",render:function(e,t){return r.a.createElement(d.b,{size:"middle"},r.a.createElement(S.a,{title:"Sure to delete?",onConfirm:function(){o(t.id)}},r.a.createElement("span",null,"Delete")),r.a.createElement(l.b,{to:"/post/".concat(t.id)},"Edit"))}}];return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Welcome to posts home"),r.a.createElement(b.a,{dataSource:n.slice(10*(c.currPage-1),10*c.currPage),pagination:!1,columns:i}),r.a.createElement(v,null))},A=n(27),I=n(367),w=n(192),C=n(50),G=n(190),L=n.n(G),k=function(){console.log("useParams()",Object(i.g)());var e=Object(i.g)().id,t=Object(u.b)(),n=I.a.useForm(),c=Object(_.a)(n,1)[0],o=Object(u.c)((function(e){return e.posts})),s=o.selectedPost,d=o.loading;Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(E.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_POST_START"}),t.prev=1,t.next=4,O(e);case 4:return a=t.sent,t.abrupt("return",n({payload:a.data,type:"GET_POST_SUCCESS"}));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",n({payload:"Something went wrong...",type:"GET_POST_FAILURE"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e,t]);return d||!s?r.a.createElement("div",null,"...Loading"):r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(I.a,{initialValues:{body:s.body,title:s.title},layout:"vertical",form:c,name:"control-hooks",onFinish:function(n){var a;console.log(n),t((a=Object(A.a)(Object(A.a)({},n),{},{id:e}),function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"EDIT_POSTS_START"}),e.prev=1,e.next=4,y(a);case 4:return f.b.success("Post edited successfully!"),e.abrupt("return",t({type:"EDIT_POSTS_SUCCESS"}));case 8:return e.prev=8,e.t0=e.catch(1),f.b.error("Something went wrong, please try again"),e.abrupt("return",t({payload:"Something went wrong...",type:"EDIT_POSTS_FAILURE"}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement(I.a.Item,{name:"title",label:"Title",rules:[{required:!0}]},r.a.createElement(w.a,null)),r.a.createElement(I.a.Item,{name:"body",label:"Description",rules:[{required:!0}]},r.a.createElement(L.a,null)),r.a.createElement(I.a.Item,null,r.a.createElement(C.a,{disabled:d,type:"primary",htmlType:"submit"},"Submit"))))};n(360),n(361);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(h,null)}),r.a.createElement(i.a,{exact:!0,path:"post/:id",element:r.a.createElement(k,null)})))},R=n(105),U=n(191),x=(n(362),{posts:[],selectedPost:null,error:null,loading:!1});var F={total:0,currPage:1,totalPages:0};var N=Object(R.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS_START":return Object(A.a)(Object(A.a)({},e),{},{error:null,loading:!0});case"GET_POSTS_FAILURE":return Object(A.a)(Object(A.a)({},e),{},{error:t.payload,loading:!1});case"GET_POSTS_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{posts:t.payload,loading:!1});case"DELETE_POSTS_START":return Object(A.a)(Object(A.a)({},e),{},{error:null,loading:!0});case"DELETE_POSTS_FAILURE":return Object(A.a)(Object(A.a)({},e),{},{error:t.payload,loading:!1});case"DELETE_POSTS_SUCCESS":var n=e.posts.filter((function(e){return e.id!==t.payload}));return Object(A.a)(Object(A.a)({},e),{},{posts:n,loading:!1});case"GET_POST_START":return Object(A.a)(Object(A.a)({},e),{},{error:null,loading:!0});case"GET_POST_FAILURE":return Object(A.a)(Object(A.a)({},e),{},{error:t.payload,loading:!1});case"GET_POST_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{selectedPost:t.payload,loading:!1});case"EDIT_POSTS_START":return Object(A.a)(Object(A.a)({},e),{},{error:null,loading:!0});case"EDIT_POSTS_FAILURE":return Object(A.a)(Object(A.a)({},e),{},{error:t.payload,loading:!1});case"EDIT_POSTS_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{loading:!1});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIATE_PAGES":return Object(A.a)(Object(A.a)({},e),t.payload);case"CHANGE_PAGE":return Object(A.a)(Object(A.a)({},e),{},{currPage:t.payload});default:return e}}}),H=[U.a],q=Object(R.c)(N,R.a.apply(void 0,H)),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,370)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(363);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:q},r.a.createElement(l.a,null,r.a.createElement(D,null)))),document.getElementById("root")),B()}},[[197,1,2]]]);
//# sourceMappingURL=main.9e516bd4.chunk.js.map