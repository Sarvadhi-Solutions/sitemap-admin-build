(this["webpackJsonpZopto-Web"]=this["webpackJsonpZopto-Web"]||[]).push([[12],{1408:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(10),i=n(121),c=n(1326),r=n(1313),l=n(119),o=n(65),u=n(1),d=n(6),s=n(16),b=n(13),v=n(2),j=n(1237),p=n(631),f=n(1319),O=n(229),x=n(1229),m=n(322),h=n(79),g=n(182),S=n(5),w=n(62),y=n(1300),k=n(1310),_=n(36),B=n(70),E=n(28),F=n(61),C=n(256),I=n(152),P=n(32),z=n(64),A=n(308),D=n(1341),R=n(20),q=n(1342),U=n(0),W=Object(S.a)(y.a.div)((function(e){var t=e.theme;return Object(v.a)(Object(v.a)({},Object(C.a)(t).bgBlur({color:t.palette.background.paper,opacity:.92})),{},{top:0,right:0,bottom:0,display:"flex",position:"fixed",overflow:"hidden",width:400,flexDirection:"column",margin:t.spacing(2),paddingBottom:t.spacing(3),zIndex:t.zIndex.drawer+3,borderRadius:1.5*Number(t.shape.borderRadius),boxShadow:"-24px 12px 32px -4px ".concat(Object(w.a)("light"===t.palette.mode?t.palette.grey[500]:t.palette.common.black,.16))})}));function G(e){var t,n=e.callBack,i=e.data,c=Object(u.useState)(i),l=Object(a.a)(c,2),v=l[0],S=l[1],w=Object(u.useState)(""),y=Object(a.a)(w,2),C=y[0],G=y[1],J=Object(u.useState)(null),L=Object(a.a)(J,2),M=(L[0],L[1],Object(u.useState)(null)),N=Object(a.a)(M,2),Z=(N[0],N[1],Object(u.useState)(null)),V=Object(a.a)(Z,2),H=V[0],K=V[1],Q=Object(u.useState)(null),T=Object(a.a)(Q,2),X=T[0],Y=T[1],$=Object(u.useState)([]),ee=Object(a.a)($,2),te=(ee[0],ee[1]),ne=Object(u.useState)([]),ae=Object(a.a)(ne,2),ie=ae[0],ce=ae[1],re=Object(u.useState)(!1),le=Object(a.a)(re,2),oe=le[0],ue=le[1],de=Object(u.useState)([]),se=Object(a.a)(de,2),be=(se[0],se[1]),ve=Object(u.useState)([]),je=Object(a.a)(ve,2),pe=je[0],fe=je[1],Oe=Object(P.b)(),xe=Object(z.b)().enqueueSnackbar,me={brand_name:(null===v||void 0===v?void 0:v.brand_name)||""};Object(u.useEffect)((function(){Object(q.isEmpty)(i)||S(i)}),[i]);var he=Object(R.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.states}));Object(u.useEffect)((function(){var e,t,n;if(ce(null===v||void 0===v||null===(e=v.category)||void 0===e?void 0:e.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}))),null!==v&&void 0!==v&&v.state&&he){var a={value:v.state.id,label:v.state.name};K(a)}K(null===v||void 0===v||null===(t=v.state)||void 0===t?void 0:t.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}))),te(null===v||void 0===v||null===(n=v.city)||void 0===n?void 0:n.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}})))}),[v,he]),Object(u.useEffect)((function(){Oe(Object(I.c)()),Oe(Object(I.b)()),Oe(Object(I.d)())}),[]);var ge=null===he||void 0===he||null===(t=he.find((function(e){return e.id===(null===H||void 0===H?void 0:H.value)})))||void 0===t?void 0:t.cities,Se=Object(R.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.categories})),we=Object(R.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.error}));Object(u.useEffect)((function(){we&&xe(we.message,{variant:"error"})}),[we]),Object(u.useEffect)((function(){if(ge){var e=null===ge||void 0===ge?void 0:ge.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));be([{value:"all-cities",label:"Select all Cities"}].concat(Object(b.a)(e)))}}),[ge]),Object(u.useEffect)((function(){if(he){var e=null===he||void 0===he?void 0:he.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));fe([{value:"all-states",label:"Select all States"}].concat(Object(b.a)(e)))}}),[he]),Object(u.useEffect)((function(){var e=null===Se||void 0===Se?void 0:Se.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));Y(e)}),[Se]);var ye=h.a().shape({brand_name:h.b().required("Brand name is required")}),ke=Object(_.f)({resolver:Object(g.a)(ye),defaultValues:me}),_e=function(){var e=Object(s.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log({acceptedFiles:t}),n=t[0],G(Object.assign(n,{preview:URL.createObjectURL(n)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=ke.handleSubmit,Ee=function(){var e=Object(s.a)(Object(d.a)().mark((function e(t){var a,i,c,r,l,o,u,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===v||void 0===v||!v.id){e.next=25;break}if(a=null===ie||void 0===ie?void 0:ie.map((function(e){return null===e||void 0===e?void 0:e.value})),i=null===H||void 0===H?void 0:H.map((function(e){return null===e||void 0===e?void 0:e.value})),(c=new FormData).append("brand_name",null===t||void 0===t?void 0:t.brand_name),i.map((function(e){return c.append("state_id",e)})),a.map((function(e){return c.append("category_id",e)})),C&&c.append("logo",C),H){e.next=13;break}return xe("Please select the state",{variant:"error"}),e.abrupt("return");case 13:if(ie.length){e.next=18;break}return xe("Please select atleast one category",{variant:"error"}),e.abrupt("return");case 18:ue(!0);case 19:return e.next=21,Oe(Object(I.h)(null===v||void 0===v?void 0:v.id,c));case 21:null!==(r=e.sent)&&void 0!==r&&r.status&&(xe("Brand SuccessFully Updated!!"),n()),e.next=50;break;case 25:if(l=null===ie||void 0===ie?void 0:ie.map((function(e){return null===e||void 0===e?void 0:e.value})),o=null===H||void 0===H?void 0:H.map((function(e){return null===e||void 0===e?void 0:e.value})),H){e.next=32;break}return xe("Please select the state",{variant:"error"}),e.abrupt("return");case 32:if(ie.length){e.next=37;break}return xe("Please select atleast one category",{variant:"error"}),e.abrupt("return");case 37:if(C){e.next=40;break}return xe("Please upload a image",{variant:"error"}),e.abrupt("return");case 40:return u=new FormData,o.map((function(e){return u.append("state_id",e)})),u.append("brand_name",null===t||void 0===t?void 0:t.brand_name),l.map((function(e){u.append("category_id",e)})),u.append("logo",C),e.next=47,Oe(Object(I.e)(u));case 47:null!==(s=e.sent)&&void 0!==s&&s.status&&xe("Brand SuccessFully Added!!"),n();case 50:ue(!1);case 51:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[oe&&Object(U.jsx)(j.a,{open:oe,sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},children:Object(U.jsx)(p.a,{color:"inherit"})}),Object(U.jsx)(k.a,{children:Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(W,{children:[Object(U.jsxs)(f.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[Object(U.jsx)(O.a,{variant:"subtitle1",children:null!==v&&void 0!==v&&v.id?"Edit Brand":"Add Brand"}),Object(U.jsx)("div",{children:Object(U.jsx)(o.a,{onClick:function(){return n()},children:Object(U.jsx)(E.a,{icon:"eva:close-fill",width:20,height:20})})})]}),Object(U.jsx)(x.a,{}),Object(U.jsx)(F.a,{sx:{flexGrow:1},children:Object(U.jsx)(f.a,{spacing:3,sx:{p:"24px 24px 82px"},children:Object(U.jsx)(B.a,{methods:ke,onSubmit:Be(Ee),children:Object(U.jsx)(r.a,{container:!0,spacing:3,sx:{mb:2},children:Object(U.jsxs)(r.a,{item:!0,xs:12,md:12,sx:{height:"550px"},children:[Object(U.jsx)(A.a,{name:"logo",file:C||(null===v||void 0===v?void 0:v.logo),accept:"image/*",onDrop:_e}),Object(U.jsx)(B.b,{sx:{mt:2},name:"brand_name",label:"Brand Name*",autoComplete:"off"}),Object(U.jsx)(f.a,{spacing:3,sx:{mt:2},children:Object(U.jsx)(D.a,{isMulti:!0,placeholder:"select states",options:pe,value:H,onChange:function(e){return function(e){var t=pe.filter((function(e){return"all-states"!==e.value}));e.some((function(e){return"all-states"===e.value}))?K(t):K(e)}(e)}})}),Object(U.jsx)(f.a,{spacing:3,sx:{mt:2},children:Object(U.jsx)(D.a,{name:"category_id",isMulti:!0,placeholder:"select categories",options:X,value:ie,onChange:function(e){ce(e)}})}),Object(U.jsx)(f.a,{spacing:3,alignItems:"flex-end",justifyContent:"flex-end",direction:"row",sx:{mt:2},children:Object(U.jsx)(m.a,{type:"submit",variant:"outlined",children:null!==v&&void 0!==v&&v.id?"Save":"Add"})})]})})})})})]})})})]})}var J=n(431);function L(){var e=Object(i.a)().themeStretch,t=Object(u.useState)(!1),n=Object(a.a)(t,2),d=n[0],s=n[1],b=Object(u.useState)({}),v=Object(a.a)(b,2),j=v[0],p=v[1],f=function(){p(),s(!d)};return Object(U.jsx)(l.a,{title:"General: App",children:Object(U.jsxs)(c.a,{maxWidth:!e&&"xl",children:[d&&Object(U.jsx)(o.c,{children:Object(U.jsx)(G,{callBack:function(){return f()},data:j})}),Object(U.jsx)(r.a,{item:!0,xs:12,lg:8,children:Object(U.jsx)(J.a,{callBack:function(){return f()},updateForm:function(e){!function(e){p(e),s(!d)}(e)}})})]})})}}}]);
//# sourceMappingURL=12.11dfd4a9.chunk.js.map