(this["webpackJsonpZopto-Web"]=this["webpackJsonpZopto-Web"]||[]).push([[8],{1402:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(11),i=n(2),r=n(5),c=n(14),l=n(8),o=n(1249),s=n(641),d=n(1253),u=n(1241),b=n(23),j=n(133),p=n(67),h=n(1251),v=n(336),f=n(1328),O=n(639),x=n(1),g=n(1355),m=n.n(g),y=(n(1356),n(27)),w=n(437),C=n(1357),S=n.n(C),k=n(30),_=n(21),I=n(56),W=n(162),D=n(1321),R=n(163),E=n(1403),L=n(1361),P=n(1371),A=n(1408),U=n(1360),z=n.n(U),F=n(1410),H=n(1350),M=n.n(H),J=n(1324),B=n(43),N=n(0);function T(){var e,t=Object(x.useState)({width:0,height:0}),n=Object(l.a)(t,2),g=n[0],C=n[1],U=Object(x.useState)([]),H=Object(l.a)(U,2),T=H[0],Z=H[1],q=Object(x.useState)(null),Q=Object(l.a)(q,2),G=Q[0],K=Q[1],V=Object(x.useState)(""),X=Object(l.a)(V,2),Y=X[0],$=X[1],ee=Object(x.useState)([]),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ie=Object(x.useState)(null),re=Object(l.a)(ie,2),ce=re[0],le=re[1],oe=Object(x.useState)(),se=Object(l.a)(oe,2),de=se[0],ue=se[1],be=Object(x.useState)(),je=Object(l.a)(be,2),pe=je[0],he=je[1],ve=Object(x.useState)([]),fe=Object(l.a)(ve,2),Oe=fe[0],xe=fe[1],ge=Object(x.useState)(),me=Object(l.a)(ge,2),ye=me[0],we=me[1],Ce=Object(x.useState)([]),Se=Object(l.a)(Ce,2),ke=Se[0],_e=Se[1],Ie=Object(x.useState)(),We=Object(l.a)(Ie,2),De=We[0],Re=We[1],Ee=Object(x.useState)([]),Le=Object(l.a)(Ee,2),Pe=Le[0],Ae=Le[1],Ue=Object(x.useState)(null),ze=Object(l.a)(Ue,2),Fe=ze[0],He=ze[1],Me=Object(x.useState)(!1),Je=Object(l.a)(Me,2),Be=Je[0],Ne=Je[1],Te=Object(x.useState)(null),Ze=Object(l.a)(Te,2),qe=Ze[0],Qe=Ze[1],Ge=Object(x.useRef)(null),Ke=Object(x.useRef)(null),Ve=Object(x.useState)([]),Xe=Object(l.a)(Ve,2),Ye=Xe[0],$e=Xe[1],et=Object(k.b)(),tt=Object(I.b)().enqueueSnackbar,nt=new Date,at=function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(t),K(URL.createObjectURL(t)),(n=new Image).addEventListener("load",(function(){var e=n.width,t=n.height;C({width:e,height:t})})),n.src=URL.createObjectURL(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(x.useEffect)((function(){return window.addEventListener("popstate",pt),function(){window.removeEventListener("popstate",pt)}}),[]),Object(x.useEffect)((function(){et(Object(W.c)()),et(Object(W.a)()),et(Object(W.d)())}),[et]);var it=null===de||void 0===de?void 0:de.value,rt=Object(_.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.brandList})),ct=Object(_.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.cities})),lt=null===pe||void 0===pe?void 0:pe.value,ot=null===rt||void 0===rt||null===(e=rt.find((function(e){return e.id===it})))||void 0===e?void 0:e.states,st=null===ct||void 0===ct?void 0:ct.filter((function(e){return e.state_id===lt})),dt=Object(_.d)((function(e){var t;return null===e||void 0===e||null===(t=e.brand)||void 0===t?void 0:t.error}));Object(x.useEffect)((function(){dt&&tt(dt.message,{variant:"error"})}),[dt,tt]),Object(x.useEffect)((function(){if(ot){var e=null===ot||void 0===ot?void 0:ot.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));xe(e)}}),[ot]),Object(x.useEffect)((function(){if(ct&&pe){var e=null===st||void 0===st?void 0:st.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name}}));Z([{value:"all-cities",label:"Select all Cities"}].concat(Object(a.a)(e)))}}),[ct,pe]),Object(x.useEffect)((function(){var e=null===rt||void 0===rt?void 0:rt.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.brand_name}}));le(e)}),[rt]),Object(x.useEffect)((function(){var e=null===rt||void 0===rt?void 0:rt.map((function(e){return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.brand_name}}));le(e)}),[rt]);var ut=function(e){for(var t=null===e||void 0===e?void 0:e.url.split(","),n=t[0].match(/:(.*?);/)[1],a=atob(t[1]),i=a.length,r=new Uint8Array(i);i--;)r[i]=a.charCodeAt(i);return new Blob([r],{type:n})},bt=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t,n,a,i,c,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Date.now(),de){e.next=6;break}return tt("Please select the brand",{variant:"error"}),e.abrupt("return");case 6:if(ne.length){e.next=11;break}return tt("Please select atleast one city",{variant:"error"}),e.abrupt("return");case 11:if(pe){e.next=16;break}return tt("Please select state",{variant:"error"}),e.abrupt("return");case 16:if(Fe&&qe){e.next=21;break}return tt("Please select the date",{variant:"error"}),e.abrupt("return");case 21:if(ye){e.next=26;break}return tt("Please crop coupon",{variant:"error"}),e.abrupt("return");case 26:if(!(qe<Fe||qe<t)){e.next=31;break}return tt("Please add a valid TO date",{variant:"error"}),e.abrupt("return");case 31:if(!(Fe<M()(nt).startOf("day").valueOf())){e.next=36;break}return tt("Please add a valid FROM date",{variant:"error"}),e.abrupt("return");case 36:if(Y){e.next=41;break}return tt("Please upload a image",{variant:"error"}),e.abrupt("return");case 41:Ne(!0);case 42:return n=null===ne||void 0===ne?void 0:ne.map((function(e){return null===e||void 0===e?void 0:e.value})),a=null===pe||void 0===pe?void 0:pe.value,i=JSON.stringify(Pe),(c=new FormData).append("brand_id",de.value),c.append("main_image_width",g.width),c.append("main_image_height",g.height),c.append("image",Y),n.map((function(e){c.append("city_id",e)})),c.append("state_id",a),c.append("start_date",Fe),c.append("expiry_date",qe),c.append("crop_coordinate",i),ke.forEach((function(e,t){var n=Ye[t];c.append("crop_image_name",n);var a=ut(e);c.append("crop_images",a,"".concat(n,".png")),c.append("crop_image_id",e.id)})),e.next=58,et(Object(R.c)(c));case 58:null!==(l=e.sent)&&void 0!==l&&l.status&&(tt("Coupon SuccessFully Added!!"),ue(null),he(null),ae([]),$(null),_e([]),He(null),Qe(null),K(null),Re(null),Ae([]),we(null),Ke.current.value=null),Ne(!1),jt(B.b.general.coupon);case 62:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),jt=Object(b.m)(),pt=function(){jt(B.b.general.coupon)};return Object(N.jsxs)(N.Fragment,{children:[Be&&Object(N.jsx)(o.a,{open:Be,sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},children:Object(N.jsx)(s.a,{color:"inherit"})}),Object(N.jsx)(J.a,{children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(j.a,{heading:Object(N.jsxs)(h.a,{direction:"row",alignItems:"center",children:[Object(N.jsx)(O.a,{onClick:pt,children:Object(N.jsx)(S.a,{})}),Object(N.jsx)("span",{style:{marginLeft:8},children:"Add Coupon"})]}),links:[],sx:{m:2},action:Object(N.jsx)(v.a,{type:"submit",variant:"contained",startIcon:Object(N.jsx)(y.a,{icon:"eva:plus-fill"}),onClick:function(){bt()},children:"Save"})}),Object(N.jsx)(p.a,{children:Object(N.jsx)(h.a,{spacing:3,sx:{p:"24px 24px 82px",minHeight:"500px"},children:Object(N.jsx)(f.a,{container:!0,spacing:3,sx:{mb:2},children:Object(N.jsxs)(f.a,{item:!0,xs:12,md:12,children:[Object(N.jsxs)(h.a,{spacing:3,direction:"row",sx:{mt:2},children:[Object(N.jsx)(D.a,{id:"brand-label",style:{display:"flex",alignItems:"center",fontWeight:900},children:"Brand"}),Object(N.jsx)(w.a,{placeholder:"select brand",options:ce,value:de,onChange:function(e){ue(e)}})]}),Object(N.jsxs)(h.a,{spacing:3,direction:"row",sx:{mt:2},children:[Object(N.jsx)(D.a,{id:"state-label",style:{display:"flex",alignItems:"center",fontWeight:900},children:"State"}),Object(N.jsx)(w.a,{placeholder:"select state",options:Oe,value:pe,onChange:function(e){he(e)}})]}),Object(N.jsxs)(h.a,{spacing:3,direction:"row",sx:{mt:2},children:[Object(N.jsx)(D.a,{id:"city-label",style:{display:"flex",alignItems:"center",fontWeight:900,marginRight:"14px"},children:"City"}),Object(N.jsx)(w.a,{isMulti:!0,placeholder:"select cities",options:T,value:ne,onChange:function(e){return function(e){var t=T.filter((function(e){return"all-cities"!==e.value}));e.some((function(e){return"all-cities"===e.value}))?ae(t):ae(e)}(e)}})]}),Object(N.jsxs)(h.a,{spacing:3,direction:"row",sx:{mt:1},children:[Object(N.jsx)(D.a,{id:"expirydate-label",style:{display:"flex",alignItems:"center",fontWeight:900},children:"Expiry Date :"}),Object(N.jsx)(D.a,{id:"fromDate-label",style:{display:"flex",alignItems:"center",fontWeight:900,overflow:"visible"},children:"From"}),Object(N.jsx)(P.a,{dateAdapter:L.a,children:Object(N.jsx)(E.a,{components:["DatePicker"],children:Object(N.jsx)(A.a,{label:"Select Date",value:Fe,minDate:M()(nt),onChange:function(e){He(e)}})})}),Object(N.jsx)(D.a,{id:"to-label",style:{display:"flex",alignItems:"center",fontWeight:900,overflow:"visible"},children:"To"}),Object(N.jsx)(P.a,{dateAdapter:L.a,children:Object(N.jsx)(E.a,{components:["DatePicker"],children:Object(N.jsx)(A.a,{label:"Select Date",value:qe,onChange:function(e){return Qe(e)},minDate:M()(nt)})})})]}),Object(N.jsxs)(h.a,{spacing:3,direction:"row",justifyContent:"flex-start",sx:{mt:2,mb:3},children:[Object(N.jsx)(D.a,{id:"iamge-label",style:{display:"flex",alignItems:"center",fontWeight:900},children:"Image"}),Object(N.jsx)("input",{type:"file",accept:"image/*",style:{backgroundColor:"rgba(145, 158, 171, 0.12)",transition:"opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:10,padding:10,fontWeight:900,letterSpacing:1,border:"none",cursor:"pointer"},onChange:function(e){at(e.target.files[0])},ref:Ke})]}),Object(N.jsx)(h.a,{spacing:3,direction:"row",justifyContent:"flex-start",sx:{mt:1}}),Object(N.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[G&&Object(N.jsx)("div",{style:{position:"relative",marginRight:"50px"},children:Object(N.jsx)(m.a,{crop:ye,onChange:function(e){return we(e)},onComplete:function(e,t){if(Ge.current&&e.width&&e.height){var n=document.createElement("canvas"),r=n.getContext("2d");if(r&&Ge.current){var c=Ge.current,l=c.naturalWidth/c.width,o=c.naturalHeight/c.height,s=window.devicePixelRatio;n.width=Math.floor(e.width*l*s),n.height=Math.floor(e.height*o*s),r.scale(s,s),r.imageSmoothingQuality="high";var d=e.x*l,u=e.y*o;if(r.save(),r.scale(1,1),r.drawImage(Ge.current,d,u,n.width,n.height,0,0,n.width,n.height),!De||e.x!==De.x||e.y!==De.y||e.width!==De.width||e.height!==De.height){var b=Object(F.a)();Re(Object(i.a)(Object(i.a)({},e),{},{id:b})),Ae([].concat(Object(a.a)(Pe),[Object(i.a)(Object(i.a)({},e),{},{id:b})])),_e([].concat(Object(a.a)(ke),[{id:b,url:n.toDataURL()}]))}}}},children:Object(N.jsx)("img",{ref:Ge,src:G,alt:"avatar",style:{width:g.width,height:g.height,minWidth:g.width,minHeight:g.height,maxWidth:g.width,maxHeight:g.height}})})}),ye&&Pe.map((function(e,t){return Object(N.jsx)("div",{style:{position:"absolute",width:null===e||void 0===e?void 0:e.width,height:null===e||void 0===e?void 0:e.height,top:null===e||void 0===e?void 0:e.y,left:null===e||void 0===e?void 0:e.x,backgroundColor:"rgba(188, 68, 68, 0.5)",zIndex:2}},t)})),ke.length>0&&Object(N.jsx)(h.a,{spacing:3,direction:"column",justifyContent:"flex-start",sx:{mt:1,ml:5},children:ke.map((function(e,t){return Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(N.jsxs)("div",{style:{position:"relative ",width:"100px",height:"100px"},children:[Object(N.jsx)("img",{src:e.url,alt:"cropped-".concat(t),style:{width:"100px",height:"100px"}}),Object(N.jsx)("div",{style:{position:"absolute",top:"0",right:"0",padding:"5px",cursor:"pointer",color:"white",backgroundColor:"rgba(0, 0, 0,0.5)",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(z.a,{onClick:function(){return t=e.id,_e(ke.filter((function(e){return e.id!==t}))),void Ae(Pe.filter((function(e){return e.id!==t})));var t}})})]}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",name:"name",placeholder:"Crop Coupon Name",value:Ye[t]||"",onChange:function(e){return function(e,t){var n=Object(a.a)(Ye);n[e]=t,$e(n)}(t,e.target.value)},style:{marginLeft:20,border:"1px solid hsl(0, 0%, 80%)",transition:"opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:5,padding:5}})})]},t)}))})]})]})})})}),Object(N.jsx)(u.a,{})]})})]})}}}]);
//# sourceMappingURL=8.a7822203.chunk.js.map