(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{209:function(e,t,a){e.exports=a(368)},214:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(29),i=(a(214),a(30)),s=a(85),m=a(20),u="ADD_KEEP_NOTE",p="GET_PEOPLE",d="GET_PEOPLE_SUCCESS",b="GET_PEOPLE_FAIL",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:1,title:"Title",desc:"Description",tags:[{id:0,name:"My"}],importancy:1}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return[].concat(Object(m.a)(e),[{id:t.id,title:t.payload.title,desc:t.payload.desc,tags:t.payload.tags?t.payload.tags:[],importancy:t.payload.importancy}]);default:return e}},h=a(10),f=a(38),E=a.n(f);var v=function(e){var t=e.split("/");return t[t.length-2]};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:{results:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return w({},e);case d:var a=t.payload,n=0;return w({},e,{all:w({},a,{results:E()((function(e,t){return w({},e,{id:++n,starshipsIds:E()(v,e.starships),planetId:v(e.homeworld)})}),a.results)})});case b:return w({},e,{error:t.error});default:return e}},y=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return!0;case d:case b:default:return!1}},x=Object(i.combineReducers)({keepNotes:g,people:j,isLoading:y}),N=a(194),P=a(17),k=a(404),S=a(406),I=a(407),C=a(88),D=a(420),G=a(401),L=a(15),R=a(186),F=a.n(R),T=a(187),_=a.n(T),A=Object(G.a)((function(e){return{root:{flexGrow:1,zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));function B(e){var t=A();return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"fixed"},r.a.createElement(S.a,null,r.a.createElement(I.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(F.a,null)),r.a.createElement(C.a,{className:t.title,variant:"h6",noWrap:!0},e.title),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(_.a,null)),r.a.createElement(D.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})))))}var M=a(40),H=a(3),W=a(418);function U(e){var t=e.children,a=e.value,n=e.index,c=Object(H.a)(e,["children","value","index"]);return r.a.createElement(C.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),r.a.createElement(W.a,{p:3},t))}var z=a(419),J=a(416),V=a(31),Y=a.n(V),K=a(188),q=a(408),Q=a(409),X=a(410),Z=a(412),$=a(413),ee=a(84),te=a.n(ee),ae=a(411),ne=a(414),re=a(83),ce=a.n(re),oe="/starwars/",le=a(189),ie=a.n(le).a.create({baseURL:"https://swapi.co/api/",timeout:6e4}),se=a(415),me=Object(G.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},link:{textDecoration:"none"},spinner:{position:"fixed",bottom:"50%",right:"50%",transform:"translate(-50%, -50%)"},media:{height:220,width:253},card:{width:400,height:525},chip:{margin:e.spacing(.5)}}}));function ue(e){e.content,e.fetchPersonById;var t=me(),a=Object(M.i)().id,c=Object(n.useState)({}),o=Object(P.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),u=Object(P.a)(m,2),p=u[0],d=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(K.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,ie.get("/people/".concat(a,"/"));case 4:t=e.sent,s(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.err(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(r.a.Fragment,null,!ce()(i)&&r.a.createElement(q.a,{item:!0},r.a.createElement(Q.a,{className:t.card},r.a.createElement(X.a,{action:r.a.createElement(I.a,{"aria-label":"settings"},r.a.createElement(te.a,null)),title:i.name,subheader:i.created.slice(0,10)}),r.a.createElement(ae.a,{className:t.media,image:"".concat(oe,"Yoda.webp"),title:"Paella dish"}),r.a.createElement(Z.a,null,r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Mass of Person: ",i.mass),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Height of Person: ",i.height),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Hair color of Person: ",i.hair_color),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Skin color of Person: ",i.skin_color),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Eye color of Person: ",i.eye_color)),r.a.createElement($.a,null,r.a.createElement(l.b,{className:t.link,to:"/people"},r.a.createElement(ne.a,{variant:"contained",color:"primary",className:t.button},"Go back"))))),r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.toolbar}),p&&r.a.createElement(se.a,{className:t.spinner})))}var pe=Object(G.a)((function(e){return{media:{height:220,width:253},card:{width:400,height:425},link:{textDecoration:"none"},chip:{margin:e.spacing(.5)}}}));function de(e){var t=e.title,a=e.date,n=e.id,c=e.content,o=pe(),i=Object(M.j)().url;return r.a.createElement(q.a,{item:!0},r.a.createElement(Q.a,{className:o.card},r.a.createElement(X.a,{action:r.a.createElement(I.a,{"aria-label":"settings"},r.a.createElement(te.a,null)),title:t,subheader:a}),r.a.createElement(ae.a,{className:o.media,image:"".concat(oe,"Yoda.webp"),title:"Paella dish"}),r.a.createElement(Z.a,null,r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Mass of Person: ",c.mass),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Height of Person: ",c.height)),r.a.createElement($.a,null,r.a.createElement(l.b,{className:o.link,to:"".concat(i,"/").concat(n)},r.a.createElement(ne.a,{variant:"contained",color:"primary",className:o.button},"Go to Details")))))}var be=Object(G.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));function ge(e){var t=be(),a=E()((function(e){return r.a.createElement(de,{key:e.name,id:e.id,title:e.name,date:e.created.slice(0,10),content:e})}),e.data);return r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),ce()(e.data)&&r.a.createElement("div",null,"No data for Filters"),r.a.createElement(q.a,{container:!0},a))}var he=a(195),fe=a(421),Ee=a(417),ve={mass:{lower:0,bigger:200},height:{lower:0,bigger:250}};function Oe(){var e=new URLSearchParams(Object(M.h)().search);return{mass:e.has("mass")?e.get("mass").split(",").map((function(e){return parseInt(e,10)})):[ve.mass.lower,ve.mass.bigger],height:e.has("height")?e.get("height").split(",").map((function(e){return parseInt(e,10)})):[ve.height.lower,ve.height.bigger],nameIncludes:e.has("nameIncludes")?e.get("nameIncludes"):"",urlSearchParams:e}}var we=Object(G.a)((function(e){return{slider:{width:400},formPaper:{display:"flex",flexWrap:"wrap",marginBottom:e.spacing(2)},formInput:{width:400,marginLeft:e.spacing(1),marginRight:e.spacing(4),marginBottom:e.spacing(4)},formInputText:{width:400,marginRight:e.spacing(4),marginBottom:e.spacing(4)},formInputTextControl:{width:400,marginRight:e.spacing(4)},button:{marginRight:e.spacing(4)},toolbar:e.mixins.toolbar}}));function je(e){var t=we(),a=Object(M.g)(),c=Oe(),o=Object(P.a)(c.mass,2),l=o[0],i=o[1],s=Object(P.a)(c.height,2),m=s[0],u=s[1],p=c.nameIncludes,d=Object(n.useState)(c.mass),b=Object(P.a)(d,2),g=b[0],h=b[1],f=Object(n.useState)(c.height),E=Object(P.a)(f,2),v=E[0],O=E[1],w=Object(n.useState)(c.nameIncludes),j=Object(P.a)(w,2),y=j[0],x=j[1],N=Object(P.a)(g,2),k=N[0],S=N[1],I=Object(P.a)(v,2),D=I[0],G=I[1];var L=function(){var e="?mass=".concat(k,",").concat(S,"&height=").concat(D,",").concat(G),t=""===y?e:"".concat(e,"&nameIncludes=").concat(y);a.push(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{className:t.formPaper},r.a.createElement(W.a,{className:t.formInput},r.a.createElement(C.a,{d:"range-slider",gutterBottom:!0},"Mass is between"),r.a.createElement(fe.a,{className:t.slider,value:g,getAriaValueText:function(e){return"".concat(e," Mass")},"aria-labelledby":"range-slider",valueLabelDisplay:"auto",onChange:function(e,t){h(t)},step:10,marks:!0,min:ve.mass.lower,max:ve.mass.bigger})),r.a.createElement(W.a,{className:t.formInput},r.a.createElement(C.a,{d:"range-slider",gutterBottom:!0},"Height is between"),r.a.createElement(fe.a,{className:t.slider,value:v,getAriaValueText:function(e){return"".concat(e," Height")},"aria-labelledby":"range-slider",valueLabelDisplay:"auto",onChange:function(e,t){O(t)},step:10,marks:!0,min:ve.height.lower,max:ve.height.bigger})),r.a.createElement(W.a,{className:t.formInputText},r.a.createElement(Ee.a,{id:"standard-basic",className:t.formInputTextControl,label:"Name includes such letters",value:y,margin:"normal",onChange:function(e){x(e.target.value)}}))),r.a.createElement(he.a,{className:t.formPaper},r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{variant:"contained",color:"primary",onClick:L,className:t.button},"Apply Filters")),r.a.createElement(ne.a,{variant:"contained",onClick:function(){var e="?mass=".concat(ve.mass.lower,",").concat(ve.mass.bigger,"&height=").concat(ve.height.lower,",").concat(ve.height.bigger);h([ve.mass.lower,ve.mass.bigger]),O([ve.height.lower,ve.height.bigger]),x(""),a.push(e)},className:t.button},"Reset to default")),r.a.createElement(he.a,{className:t.formPaper},"Filtering entered: Mass entered between ",k," and ",S," AND Height is entered between ",D," and ",G," AND",""===y?" No Name Filters":" Name filter is ".concat(y)),r.a.createElement(he.a,{className:t.formPaper},"Filters applied: Mass entered between ",l," and ",i," AND Height is entered between ",m," and ",u," AND",""===p?" No Name Filters":" Name filter is ".concat(p)))}var ye=a(125),xe=a(191),Ne=a.n(xe),Pe=a(192),ke=a.n(Pe),Se=Object(ye.a)((function(e){return Ne()("people.all.results",e)}),(function(e){return e})),Ie=(Object(ye.a)(Se,(function(e){return ke()((function(e){return e.id}),e)})),function(){return{type:p}}),Ce=function(e){return{type:d,payload:e}},De=function(e){return{type:b,error:e}},Ge=a(86),Le=a.n(Ge),Re=a(87),Fe=a.n(Re),Te=a(193),_e=a.n(Te),Ae=Object(G.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},spinner:{position:"fixed",bottom:"50%",right:"50%",transform:"translate(-50%, -50%)"}}}));var Be=Object(M.k)(Object(s.b)((function(e){return{people:Se(e),loading:e.isLoading}}),(function(e){return{onGetPeople:function(){return e(Ie())}}}))((function(e){var t=Ae(),a=Oe(),c=Oe().urlSearchParams,o=Object(P.a)(a.mass,2),l=o[0],i=o[1],s=Object(P.a)(a.height,2),m=s[0],u=s[1],p=a.nameIncludes,d=function(e,t,a){return Number(e)>=Number(t)&&Number(e)<=Number(a)},b=c.has("mass")?Le()((function(e){return d(e.mass,l,i)})):Fe.a,g=c.has("height")?Le()((function(e){return d(e.height,m,u)})):Fe.a,h=""===p?Fe.a:Le()((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})),f=_e()(b,g,h)(e.people);return Object(n.useEffect)((function(){(0,e.onGetPeople)()}),[e.onGetPeople]),r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null),r.a.createElement(ge,{data:f}),r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.toolbar}),e.loading&&r.a.createElement(se.a,{className:t.spinner})))}))),Me=Object(G.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},slider:{width:400},formPaper:{display:"flex"},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},tabs:{flexGrow:1,padding:e.spacing(3)}}}));function He(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var We=Object(M.k)((function(e){var t=Me(),a=Object(n.useState)(0),c=Object(P.a)(a,2),o=c[0],l=c[1],i=Object(M.g)(),s=["/people","/starships","/planets"];return r.a.createElement("div",{className:t.root},r.a.createElement(B,{title:"Star Wars"}),r.a.createElement("div",{className:t.tab},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",null),r.a.createElement(z.a,{value:o,onChange:function(e,t){l(t),i.push(s[t])},"aria-label":"simple tabs example"},r.a.createElement(J.a,Object.assign({label:"People"},He(0))),r.a.createElement(J.a,Object.assign({label:"Starships"},He(1))),r.a.createElement(J.a,Object.assign({label:"Planet"},He(2)))),r.a.createElement(U,{value:o,index:0},r.a.createElement(M.d,null,r.a.createElement(M.a,{exact:!0,from:"/",to:"/people"}),r.a.createElement(M.b,{exact:!0,path:"/people"},r.a.createElement(Be,null)),r.a.createElement(M.b,{path:"/people/:id"},r.a.createElement(ue,null)))),r.a.createElement(U,{value:o,index:1},r.a.createElement("div",null,"Somme StarWars to be here")),r.a.createElement(U,{value:o,index:2},r.a.createElement("div",null,"Some planets to be here"))))})),Ue=(a(367),a(64)),ze=Y.a.mark(Ye),Je=Y.a.mark(Ke),Ve=Y.a.mark(qe);function Ye(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie.get("/people/");case 3:return e=t.sent,t.next=6,Object(Ue.b)(Ce(e.data));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.next=13,Object(Ue.b)(De(t.t0));case 13:case"end":return t.stop()}}),ze,null,[[0,8]])}function Ke(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.c)(Ie().type,Ye);case 2:case"end":return e.stop()}}),Je)}function qe(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([Ke()]);case 2:case"end":return e.stop()}}),Ve)}var Qe=Object(N.a)(),Xe=Object(i.applyMiddleware)(Qe),Ze=Object(i.createStore)(x,Xe);Qe.run(qe),o.a.render(r.a.createElement(s.a,{store:Ze},r.a.createElement(l.a,{basename:"/starwars"},r.a.createElement(We,null))),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.6baa6b53.chunk.js.map