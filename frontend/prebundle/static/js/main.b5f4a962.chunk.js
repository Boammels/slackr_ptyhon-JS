(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{158:function(e,a,t){e.exports=t(193)},164:function(e,a,t){},165:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(257),i=t(256),m=t(14),u=(t(163),t(164),t(9)),s=t(32),d=t(50),f=(t(165),t(38)),p=t(7),E=t.n(p),g=t(243),h=t(244),b=t(202),v=t(46),y=t(231),O=t(109),_=t(21),w=t(242),k=t(111),C=t.n(k),j=r.a.createContext(),S=j.Provider,x=(j.Consumer,j),P="http://localhost:"+window.BACKEND_PORT,I={OWNER:1,ADMIN:2,MEMBER:3},D=t(229),W=t(104),R=t.n(W),N=t(233),F=t(196),M=t(82),T=t(232),A=t(234),L=t(197),z=!1,B=function(){return z},V=function(e){return z=!!e},q=2e3,U=[],H=function(e){return U.push(e)},J=function(e){return U=U.filter((function(a){return a!==e}))},K=function(){return U.forEach((function(e){return e()}))},G=["Live","Step"];var $=function(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1],l=r.a.useRef(null),o=r.a.useState(B()?0:1),c=Object(u.a)(o,2),i=c[0],m=c[1],s=function(e){l.current&&l.current.contains(e.target)||n(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"contained",color:"primary",ref:l,"aria-label":"split button",style:{marginRight:15}},r.a.createElement(y.a,{onClick:function(){K()},disabled:0===i},G[i]),r.a.createElement(y.a,{color:"primary",size:"small","aria-owns":t?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){n((function(e){return!e}))}},r.a.createElement(R.a,null))),r.a.createElement(T.a,{open:t,anchorEl:l.current,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,t=e.placement;return r.a.createElement(F.a,Object.assign({},a,{style:{transformOrigin:"bottom"===t?"center top":"center bottom"}}),r.a.createElement(M.a,{id:"menu-list-grow"},r.a.createElement(N.a,{onClickAway:s},r.a.createElement(L.a,null,G.map((function(e,a){return r.a.createElement(A.a,{key:e,disabled:2===a,selected:a===i,onClick:function(e){return function(e,a){V(0===a),m(a),n(!1)}(0,a)}},e)}))))))})))},Q=t(108),X=t(25),Y=t(235),Z=t(236),ee=t(237),ae=t(238),te=t(239),ne=t(260),re=t(263),le=t(240),oe=t(261),ce=t(241),ie="An error occured. Try again later",me="Unable to retrieve channel information";var ue=function(e){var a=e.children,t=(Object(X.a)(e,["children"]),r.a.useState(!1)),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useState(I.MEMBER),i=Object(u.a)(c,2),s=i[0],d=i[1],f=r.a.useContext(x);function p(){o(!1),d(I.MEMBER)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(){o(!0)}},a),r.a.createElement(Y.a,{open:l,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(Z.a,{id:"form-dialog-title"},"Set User Permissions"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),e.target[0].value){var a=parseInt(e.target[0].value,10),t=parseInt(e.target[1].value,10);E.a.post("/admin/userpermission/change",{token:f,u_id:a,permission_id:t}).then((function(e){console.log(e)})).catch((function(e){console.error(e),m.b.error(ie)}))}}},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,"Enter a user id below to set permissions for this user"),r.a.createElement(te.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(te.a,{item:!0,xs:12},r.a.createElement(ne.a,{autoFocus:!0,margin:"dense",id:"u_id",label:"User ID",name:"u_id",fullWidth:!0})),r.a.createElement(te.a,{container:!0,item:!0,justify:"center",alignItems:"center"},r.a.createElement(re.a,{"aria-label":"position",name:"position",value:s,onChange:function(e){var a=parseInt(e.target.value,10);d(a)},row:!0},r.a.createElement(le.a,{value:I.MEMBER,control:r.a.createElement(oe.a,{color:"primary"}),label:"Member",labelPlacement:"bottom"}),r.a.createElement(le.a,{value:I.ADMIN,control:r.a.createElement(oe.a,{color:"primary"}),label:"Admin",labelPlacement:"bottom"}),r.a.createElement(le.a,{value:I.OWNER,control:r.a.createElement(oe.a,{color:"primary"}),label:"Owner",labelPlacement:"bottom"}))))),r.a.createElement(ce.a,null,r.a.createElement(y.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:p,type:"submit",color:"primary"},"Set")))))};function se(){var e=r.a.useState(null),a=Object(u.a)(e,2),t=a[0],n=a[1],l=function(){n(null)};return r.a.createElement("div",null,r.a.createElement(y.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},"Admin"),r.a.createElement(Q.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:l},r.a.createElement(ue,null,r.a.createElement(A.a,{onClick:l},"Set User Permissions")),r.a.createElement(A.a,{onClick:l},"Close")))}var de=Object(O.a)((function(e){return{appBar:Object(f.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},logoutButton:{float:"right"}}}));var fe=function(e){var a=e.handleMenuToggle,t=void 0===a?function(){}:a,n=de(),l=Object(_.a)(),o=Object(w.a)(l.breakpoints.up("sm")),c=r.a.useContext(x),i=r.a.useState(!1),m=Object(u.a)(i,2),f=m[0],p=m[1];return f?(E.a.post("/auth/logout",{token:c}).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),localStorage.removeItem("token"),localStorage.removeItem("u_id"),r.a.createElement(d.a,{to:"/login"})):r.a.createElement(g.a,{position:"fixed",className:n.appBar},r.a.createElement(h.a,null,!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:t,className:n.menuButton},r.a.createElement(C.a,null)),r.a.createElement(s.b,{to:"/",style:{color:"white",textDecoration:"none"}},r.a.createElement(v.a,{variant:"h5",noWrap:!0},"Slackr"))),r.a.createElement("div",{variant:"h6",className:n.title}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement($,null),r.a.createElement(se,null),r.a.createElement(y.a,{color:"inherit",className:n.logoutButton,onClick:function(){p(!0)}},"Logout"))))},pe=t(262),Ee=t(264),ge=t(245);function he(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function be(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?he(t,!0).forEach((function(a){Object(f.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ve=Object(O.a)((function(e){return{drawer:Object(f.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},toolbar:be({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(2)})}}));var ye=function(e){var a=e.container,t=e.children,n=e.open,l=e.setOpen,o=ve(),c=Object(_.a)();return r.a.createElement("nav",{className:o.drawer,"aria-label":"channels"},r.a.createElement(pe.a,{smUp:!0,implementation:"css"},r.a.createElement(Ee.a,{container:a,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:n,onClose:function(){return l(!1)},classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:o.toolbar}),r.a.createElement(ge.a,null),t)),r.a.createElement(pe.a,{xsDown:!0,implementation:"css"},r.a.createElement(Ee.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},r.a.createElement("div",{className:o.toolbar},r.a.createElement(s.b,{to:"/",style:{color:"black",textDecoration:"none"}},r.a.createElement(v.a,{variant:"h5",noWrap:!0},"Slackr"))),t)))},Oe=Object(O.a)((function(e){var a;return{body:(a={},Object(f.a)(a,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),Object(f.a)(a,"padding",20),a),toolbar:e.mixins.toolbar}}));var _e=function(e){var a=e.children,t=Oe();return r.a.createElement("div",{className:t.body},r.a.createElement("div",{className:t.toolbar}),a)};var we=function(e){var a=e.menu,t=e.body,n=r.a.useState(!1),l=Object(u.a)(n,2),o=l[0],c=l[1];return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(fe,{handleMenuToggle:function(){c((function(e){return!e}))}}),r.a.createElement(ye,{open:o,setOpen:c},a),r.a.createElement(_e,null,t))},ke=t(198),Ce=t(199),je=t(246),Se=t(247),xe=t(112),Pe=t.n(xe);function Ie(e){var a=localStorage.getItem("u_id");return null==a&&(a=-1),a}var De=function(){var e=Ie(r.a.useContext(x));return r.a.createElement(ke.a,null,r.a.createElement(Ce.a,{button:!0,key:"profile",component:s.b,to:"/profile/".concat(e)},r.a.createElement(je.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Se.a,{primary:"Profile"})))},We=t(249),Re=t(78),Ne=t.n(Re),Fe=t(79),Me=t.n(Fe),Te=t(113),Ae=t(248),Le=t(115),ze=t.n(Le),Be=t(116),Ve=t.n(Be),qe=t(114),Ue=t.n(qe);var He=function(e){var a=Object(Te.a)({},e),t=r.a.useState(!1),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useContext(x);function i(){o(!1)}return r.a.createElement("div",null,r.a.createElement(b.a,{size:"small",onClick:function(){o(!0)}},r.a.createElement(Ue.a,null)),r.a.createElement(Y.a,{open:l,onClose:i,"aria-labelledby":"form-dialog-title"},r.a.createElement(Z.a,{id:"form-dialog-title"},"Create Channel"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].value,n=!e.target[1].checked;t&&E.a.post("/channels/create",{token:c,name:t,is_public:n}).then((function(e){console.log(e),a.callback()})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,"Complete the form below to create a new channel"),r.a.createElement(te.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(te.a,{item:!0,xs:12},r.a.createElement(ne.a,{autoFocus:!0,margin:"dense",id:"channel_name",label:"Channel Name",name:"channel_name",fullWidth:!0})),r.a.createElement(te.a,{container:!0,item:!0,justify:"center",alignItems:"center"},r.a.createElement(ze.a,null),r.a.createElement(le.a,{control:r.a.createElement(Ae.a,{value:"secret",inputProps:{"aria-label":"Secret"}}),label:"Secret",labelPlacement:"top"}),r.a.createElement(Ve.a,null)))),r.a.createElement(ce.a,null,r.a.createElement(y.a,{onClick:i,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:i,type:"submit",color:"primary"},"Create")))))};function Je(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}var Ke=function(e){var a=e.channel_id,t=r.a.useState([]),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useState([]),i=Object(u.a)(c,2),m=i[0],d=i[1],f=r.a.useContext(x),p=function(){var e=E.a.get("/channels/list",{params:{token:f}}),a=E.a.get("/channels/listall",{params:{token:f}});E.a.all([e,a]).then(E.a.spread((function(e,a){var t=e.data.channels,n=a.data.channels.filter((function(e){return void 0===t.find((function(a){return a.channel_id===e.channel_id}))}));o(t),d(n)})))};return r.a.useEffect((function(){return p(),H(p),function(){return J(p)}}),[]),Je((function(){B()&&p()}),2*q),r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{subheader:r.a.createElement(We.a,{style:{display:"flex"}},r.a.createElement("span",{style:{flex:1}},"My Channels"),r.a.createElement(He,{callback:p}))},l.map((function(e,t){var n=e.channel_id,l=e.name;return r.a.createElement(Ce.a,{button:!0,key:n,component:s.b,to:"/channel/".concat(n)},r.a.createElement(je.a,null,n==a?r.a.createElement(Ne.a,null):r.a.createElement(Me.a,null)),r.a.createElement(Se.a,{primary:l}))}))),r.a.createElement(ke.a,{subheader:r.a.createElement(We.a,null,"Other Channels")},m.map((function(e,t){var n=e.channel_id,l=e.name;return r.a.createElement(Ce.a,{button:!0,key:n,component:s.b,to:"/channel/".concat(n)},r.a.createElement(je.a,null,n==a?r.a.createElement(Ne.a,null):r.a.createElement(Me.a,null)),r.a.createElement(Se.a,{primary:l}))}))))};var Ge=function(e){var a=e.channel_id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null),r.a.createElement(Ke,{channel_id:a}))};var $e=function(e){return r.a.createElement(we,{menu:r.a.createElement(Ge,null),body:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h4"},"WELCOME"),r.a.createElement("div",{style:{paddingTop:15}},r.a.createElement(v.a,{variant:"body1"},"This is SengChat: agile messaging for Software Engineers \u2764\ufe0f")))})},Qe=t(252),Xe=t(254),Ye=t(126),Ze=t.n(Ye),ea=t(125),aa=t.n(ea);var ta=function(e){var a=e.channel_id,t=(Object(X.a)(e,["channel_id"]),r.a.useState(!1)),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useContext(x);function i(){o(!1)}return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Invite Member"),r.a.createElement(Y.a,{open:l,onClose:i,"aria-labelledby":"form-dialog-title"},r.a.createElement(Z.a,{id:"form-dialog-title"},"Invite User"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].value;t&&E.a.post("/channel/invite",{token:c,u_id:t,channel_id:a}).then((function(e){console.log(e)})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,"Enter a user id below to invite a user to this channel"),r.a.createElement(ne.a,{autoFocus:!0,margin:"dense",id:"u_id",label:"User ID",name:"u_id",fullWidth:!0})),r.a.createElement(ce.a,null,r.a.createElement(y.a,{onClick:i,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:i,type:"submit",color:"primary"},"Invite")))))},na=t(117),ra=t.n(na),la=t(80),oa=t.n(la),ca=t(81),ia=t(250);var ma=Object(ia.a)((function(e){var a=e.message_id,t=e.is_pinned,n=void 0!==t&&t,l=e.theme,o=r.a.useState(n),c=Object(u.a)(o,2),i=c[0],m=c[1];r.a.useEffect((function(){return m(n)}),[n]);var s=r.a.useContext(x);return r.a.createElement(b.a,{onClick:function(){i?E.a.post("/message/unpin",{token:s,message_id:a}):E.a.post("/message/pin",{token:s,message_id:a})},style:{margin:1},size:"small",edge:"end","aria-label":"delete"},i?r.a.createElement(oa.a,{path:ca.a,size:"1em",color:l&&l.palette.action.active}):r.a.createElement(oa.a,{path:ca.b,size:"1em",color:l&&l.palette.action.active}))})),ua=t(251),sa=t(118),da=t.n(sa),fa=t(119),pa=t.n(fa);var Ea=function(e){var a=e.message_id,t=e.reacts,n=void 0===t?[]:t,l=r.a.useContext(x),o=0,c=!1,i=n.findIndex((function(e){return 1===e.react_id}));return-1!==i&&(o=n[i].u_ids.length,c=n[i].is_this_user_reacted),r.a.createElement(ua.a,{anchorOrigin:{horizontal:"right",vertical:"bottom"},badgeContent:o,color:"secondary"},r.a.createElement(b.a,{onClick:function(){return function(e){e?E.a.post("/message/unreact",{token:l,message_id:a,react_id:1}):E.a.post("/message/react",{token:l,message_id:a,react_id:1})}(c)},style:{margin:1},size:"small",edge:"end","aria-label":"delete"},c?r.a.createElement(da.a,{fontSize:"small"}):r.a.createElement(pa.a,{fontSize:"small"})))},ga=t(120),ha=t.n(ga);var ba=function(e){var a=e.message_id,t=r.a.useContext(x);return r.a.createElement(b.a,{onClick:function(){E.a.delete("/message/remove",{data:{token:t,message_id:a}})},style:{margin:1},size:"small",edge:"end","aria-label":"delete"},r.a.createElement(ha.a,{fontSize:"small"}))},va=t(71),ya=t.n(va);var Oa=function(e){var a=e.message_id,t=r.a.useContext(x);return r.a.createElement(b.a,{onClick:function(){var e=prompt();e&&E.a.post("/message/edit",{token:t,message_id:a,message:e})},style:{margin:1},size:"small",edge:"end","aria-label":"delete"},r.a.createElement(ya.a,{fontSize:"small"}))};var _a=function(e){var a=e.message_id,t=e.message,n=void 0===t?"":t,l=e.u_id,o=e.time_created,c=(e.is_unread,e.is_pinned),i=void 0!==c&&c,m=e.reacts,s=void 0===m?[]:m,d=r.a.useState(),f=Object(u.a)(d,2),p=f[0],g=f[1],h=r.a.useState(),b=Object(u.a)(h,2),v=b[0],y=b[1],O=r.a.useContext(x);return r.a.useEffect((function(){g(),y(),E.a.get("/user/profile",{params:{token:O,u_id:l}}).then((function(e){var a=e.data,t=(a.email,a.name_first),n=void 0===t?"":t,r=a.name_last,l=void 0===r?"":r;a.handle_str;g("".concat(n," ").concat(l)),y("".concat(n[0]).concat(l[0]))})).catch((function(e){console.error(e)}))}),[a,O,l]),r.a.createElement(Ce.a,{key:a,style:{width:"100%"}},p&&v&&n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,null,r.a.createElement(Qe.a,null,v)),r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(Se.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,p),r.a.createElement("span",{style:{paddingLeft:10,fontSize:10}},ra()(1e3*o))),secondary:n}),r.a.createElement("div",{style:{display:"flex",height:30,marginLeft:20}},r.a.createElement(Ea,{message_id:a,reacts:s,u_id:l}),r.a.createElement(ma,{message_id:a,is_pinned:i}),r.a.createElement(Oa,{message_id:a}),r.a.createElement(ba,{message_id:a})))))},wa=t(253),ka=t(124),Ca=t.n(ka),ja=t(123),Sa=t.n(ja),xa=t(203),Pa=t(258);var Ia=function(e){var a=e.open,t=e.handleClose,n=e.onTimerChange,l=(Object(X.a)(e,["open","handleClose","onTimerChange"]),r.a.useState(new Date)),o=Object(u.a)(l,2),c=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement(Y.a,{open:a,onClose:t,"aria-labelledby":"form-dialog-title"},r.a.createElement(Z.a,{id:"form-dialog-title"},"Send later"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(c)}},r.a.createElement(ee.a,null,r.a.createElement(Pa.a,{margin:"normal",id:"time-picker",label:"Time picker",value:c,onChange:function(e){return i(e.toDate())},KeyboardButtonProps:{"aria-label":"change time"}}),r.a.createElement(ae.a,null,"Enter a time to send")),r.a.createElement(ce.a,null,r.a.createElement(y.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:t,type:"submit",color:"primary"},"Set Time")))))},Da=Object(xa.a)((function(e){return{flex:{display:"flex",flexDirection:"row",alignItems:"center"},input:{margin:e.spacing(1),marginRight:0},button:{margin:e.spacing(1),marginLeft:0,alignSelf:"stretch"},rightIcon:{marginLeft:e.spacing(1)}}})),Wa=-1;var Ra=function(e){var a=e.channel_id,t=void 0===a?"":a,n=e.onAdd,l=void 0===n?function(){}:n,o=Da(),c=r.a.useState(""),i=Object(u.a)(c,2),s=i[0],d=i[1],f=r.a.useState(Wa),p=Object(u.a)(f,2),g=p[0],h=p[1],v=r.a.useState(!1),O=Object(u.a)(v,2),_=O[0],w=O[1],k=r.a.useContext(x),C=g!==Wa,j=function(){var e=s.trim();e&&(d(""),C?(E.a.post("/message/sendlater",{token:k,channel_id:t,message:e,time_sent:g.toISOString()}).then((function(e){var a=e.data;console.log(a)})).catch((function(e){console.error(e),m.b.error(ie)})),h(Wa)):("/standup"==e&&alert("Hello. This feature isn't finished yet. We won't be expecting you to demonstrate this on the frontend in iteration 2"),E.a.post("/message/send",{token:k,channel_id:t,message:e}).then((function(e){var a=e.data;console.log(a),l()})).catch((function(e){console.error(e),m.b.error(ie)}))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.flex},r.a.createElement(ne.a,{className:o.input,label:"Send a message \ud83d\udcac",multiline:!0,placeholder:"...",fullWidth:!0,margin:"normal",variant:"filled",onKeyDown:function(e){"Enter"!==e.key||e.getModifierState("Shift")||(e.preventDefault(),j())},value:s,onChange:function(e){return d(e.target.value)},InputProps:{endAdornment:r.a.createElement(wa.a,{position:"end"},r.a.createElement(b.a,{"aria-label":"toggle visibility",onClick:function(){return C?h(-1):w(!0)}},r.a.createElement(Sa.a,{color:C?"secondary":void 0})))}}),r.a.createElement(y.a,{className:o.button,variant:"contained",color:"primary",onClick:j},"Send",r.a.createElement(Ca.a,{className:o.rightIcon}))),r.a.createElement(Ia,{open:_,handleClose:function(){return w(!1)},onTimerChange:h}))};var Na=function(e){var a=e.channel_id,t=void 0===a?"":a,n=r.a.useState([]),l=Object(u.a)(n,2),o=l[0],c=l[1],i=r.a.useState(0),s=Object(u.a)(i,2),d=s[0],f=s[1],p=r.a.useContext(x),g=function(){return E.a.get("/channel/messages",{params:{token:p,channel_id:t,start:d}}).then((function(e){var a=e.data,t=a.messages,n=(a.start,a.end);f(n),c(o.concat(t))})).catch((function(e){console.error(e),m.b.error(me)}))};return r.a.useEffect((function(){return g(),H(g),function(){return J(g)}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),-1!=d&&r.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:function(){return g()}},"Previous messages"),r.a.createElement(ke.a,{subheader:r.a.createElement(We.a,null,"Messages"),style:{width:"100%"}},o.slice().reverse().map((function(e){return r.a.createElement(_a,e)}))),r.a.createElement(Ra,{onAdd:function(){return E.a.get("/channel/messages",{params:{token:p,channel_id:t,start:0}}).then((function(e){var a=e.data,t=a.messages,n=(a.start,a.end);f(n),c(t)})).catch((function(e){console.error(e),m.b.error(me)}))},channel_id:t}))};var Fa=function(e){var a=e.channel_id,t=(Object(X.a)(e,["channel_id"]),r.a.useState("")),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useState([]),i=Object(u.a)(c,2),s=i[0],d=i[1],f=r.a.useState([]),p=Object(u.a)(f,2),g=p[0],h=p[1],O=r.a.useContext(x),_=Ie();function w(){E.a.get("/channel/details",{params:{token:O,channel_id:a}}).then((function(e){var a=e.data,t=a.name,n=a.owner_members,r=a.all_members;d(r),h(n),o(t)})).catch((function(e){console.error(e),m.b.error(me)}))}function k(e,a){return void 0!==e.find((function(e){return parseInt(e.u_id,10)===parseInt(a,10)}))}r.a.useEffect((function(){return w(),H(w),function(){return J(w)}}),[a,O]),Je((function(){B()&&w()}),2*q);var C=k(g,_);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h4"},l.toUpperCase()),r.a.createElement(ke.a,{subheader:r.a.createElement(We.a,null,"Members")},s.map((function(e){var t=e.u_id,n=e.name_first,l=e.name_last;return r.a.createElement(Ce.a,{key:t},r.a.createElement(je.a,null,r.a.createElement(Qe.a,null,n[0],l[0])),r.a.createElement(Se.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(te.a,{item:!0},r.a.createElement(Xe.a,{href:"/profile/".concat(t)},"".concat(n," ").concat(l)),"".concat(k(g,t)?" \u2b50":" ")),C&&r.a.createElement(te.a,{item:!0},k(g,t)?r.a.createElement(b.a,{size:"small",onClick:function(){return function(e){E.a.post("/channel/removeowner",{token:O,channel_id:a,u_id:e}).then((function(){w()})).catch((function(e){console.error(e),m.b.error(ie)}))}(t)}},r.a.createElement(aa.a,null)):r.a.createElement(b.a,{size:"small",onClick:function(){return function(e){E.a.post("/channel/addowner",{token:O,channel_id:a,u_id:e}).then((function(){w()})).catch((function(e){console.error(e),m.b.error(ie)}))}(t)}},r.a.createElement(Ze.a,null)))))}))})),r.a.createElement(Ce.a,{key:"invite_member"},function(e){return void 0!==e.find((function(e){return parseInt(e.u_id,10)===parseInt(_,10)}))}(s)?r.a.createElement(te.a,{container:!0,spacing:1},r.a.createElement(te.a,{item:!0},r.a.createElement(ta,{channel_id:a})),r.a.createElement(te.a,{item:!0},r.a.createElement(y.a,{variant:"outlined",onClick:function(){return function(e,a){E.a.post("/channel/leave",{token:a,channel_id:e}).then((function(){w()})).catch((function(e){console.error(e),m.b.error(ie)}))}(a,O)}},"Leave Channel"))):r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){return function(e,a){E.a.post("/channel/join",{token:a,channel_id:e}).then((function(){w()})).catch((function(e){console.error(e),m.b.error(ie)}))}(a,O)}},"Join Channel"))),r.a.createElement(Na,{channel_id:a}))};var Ma=function(e){var a=e.match.params.channel_id;return r.a.createElement(we,{menu:r.a.createElement(Ge,{channel_id:a}),body:r.a.createElement(Fa,{channel_id:a})})},Ta=t(255),Aa=t(259),La=t(127),za=t.n(La),Ba=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.primary.light}},card:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",borderRadius:e.shape.borderRadius}}}));var Va=function(e){var a=e.setAuth,t=Object(X.a)(e,["setAuth"]),n=Ba();return r.a.createElement(Ta.a,{component:"main",maxWidth:"sm"},r.a.createElement(Aa.a,{boxShadow:3,className:n.card},r.a.createElement(Qe.a,null,r.a.createElement(za.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault();var n=e.target[0].value,r=e.target[2].value;n&&r&&E.a.post("/auth/login",{email:n,password:r}).then((function(e){console.log(e);var n=e.data;a(n.token,n.u_id),t.history.push("/")})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"text",autoFocus:!0}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign In"),r.a.createElement(te.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(te.a,{item:!0},r.a.createElement("br",null),r.a.createElement(Xe.a,{href:"/register",variant:"body1"},"Don't have an account? Register")),r.a.createElement(te.a,{item:!0},r.a.createElement("br",null),r.a.createElement(Xe.a,{href:"/forgot_password",variant:"body1"},"Forgot password?"))))))},qa=t(57),Ua=t.n(qa);function Ha(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Ja(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ha(t,!0).forEach((function(a){Object(f.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ha(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Ka=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.primary.light}},card:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",borderRadius:e.shape.borderRadius}}}));var Ga=function(e){var a=e.setAuth,t=Object(X.a)(e,["setAuth"]),n=r.a.useState({name_first:"",name_last:"",email:"",password:""}),l=Object(u.a)(n,2),o=l[0],c=l[1],i=function(e){return function(a){c(Ja({},o,Object(f.a)({},e,a.target.value)))}},s=Ka();return r.a.createElement(Ta.a,{component:"main",maxWidth:"sm"},r.a.createElement(Aa.a,{boxShadow:3,className:s.card},r.a.createElement(Qe.a,null,r.a.createElement(Ua.a,{color:"secondary"})),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),o.email&&o.password&&E.a.post("/auth/register",Ja({},o)).then((function(e){console.log(e);var n=e.data;a(n.token,n.u_id),t.history.push("/")})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name_first",label:"First name",name:"name_first",type:"text",autoFocus:!0,value:o.name_first,onChange:i("name_first")}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name_last",label:"Last name",name:"name_last",type:"text",value:o.name_last,onChange:i("name_last")}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email",value:o.email,onChange:i("email")}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:o.password,onChange:i("password")}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign Up"),r.a.createElement(te.a,{container:!0},r.a.createElement(te.a,{item:!0},r.a.createElement("br",null),r.a.createElement(Xe.a,{href:"/login",variant:"body1"},"Already have an account? Login"))))))},$a=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.primary.light}},card:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",borderRadius:e.shape.borderRadius}}}));var Qa=function(e){var a=$a();return r.a.createElement(Ta.a,{component:"main",maxWidth:"sm"},r.a.createElement(Aa.a,{boxShadow:3,className:a.card},r.a.createElement(Qe.a,null,r.a.createElement(Ua.a,{color:"secondary"})),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Forgot Password"),r.a.createElement("form",{noValidate:!0,onSubmit:function(a){a.preventDefault();var t=a.target[0].value;t&&E.a.post("/auth/passwordreset/request",{email:t}).then((function(a){console.log(a),e.history.push("/reset_password")})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email",autoFocus:!0}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Send Recovery Email"),r.a.createElement(te.a,{container:!0},r.a.createElement(te.a,{item:!0},r.a.createElement("br",null),r.a.createElement(Xe.a,{href:"/login",variant:"body1"},"Remember your password? Login"))))))},Xa=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.primary.light}},card:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",borderRadius:e.shape.borderRadius}}}));var Ya=function(e){var a=Xa();return r.a.createElement(Ta.a,{component:"main",maxWidth:"sm"},r.a.createElement(Aa.a,{boxShadow:3,className:a.card},r.a.createElement(Qe.a,null,r.a.createElement(Ua.a,{color:"secondary"})),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Reset Password"),r.a.createElement("form",{noValidate:!0,onSubmit:function(a){a.preventDefault();var t=a.target[0].value,n=a.target[2].value;t&&n&&E.a.post("/auth/passwordreset/reset",{reset_code:t,new_password:n}).then((function(a){console.log(a),e.history.push("/login")})).catch((function(e){console.error(e),m.b.error(ie)}))}},r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"reset_code",label:"Reset code",name:"reset_code",type:"text",autoFocus:!0}),r.a.createElement(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"new_password",label:"New Password",name:"new_password",type:"password"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Change Password"),r.a.createElement(te.a,{container:!0},r.a.createElement(te.a,{item:!0},r.a.createElement("br",null),r.a.createElement(Xe.a,{href:"/login",variant:"body1"},"Remember your password? Login"))))))},Za=t(134),et=t(129),at=t.n(et),tt=t(128),nt=t.n(tt);var rt=function(e){var a=e.editable,t=e.master,n=e.masterValue,l=e.slaves,o=e.slaveValues,c=e.onSave,i=(Object(X.a)(e,["editable","master","masterValue","slaves","slaveValues","onSave"]),r.a.useState(!1)),m=Object(u.a)(i,2),s=m[0],d=m[1],f=r.a.useState(),p=Object(u.a)(f,2),E=p[0],g=p[1],h=r.a.useState(n),b=Object(u.a)(h,2),v=b[0],y=b[1],O=r.a.useState([]),_=Object(u.a)(O,2),w=_[0],k=_[1],C=r.a.useState(o),j=Object(u.a)(C,2),S=j[0],x=j[1];function P(){g(v),k(S),d(!s)}return r.a.useEffect((function(){y(n),x(o)}),[n,o]),r.a.createElement(te.a,{container:!0,spacing:1,alignItems:"flex-end"},l&&l.map((function(e,a){return r.a.createElement(te.a,{item:!0,key:a},e({value:S[a]||"",InputProps:{readOnly:!s},onChange:function(e){return function(e,a){var t=S.map((function(t,n){return n===a?e.target.value:t}));x(t)}(e,a)}}))})),r.a.createElement(te.a,{item:!0},t({value:v||"",InputProps:{readOnly:!s},onChange:function(e){y(e.target.value)}})),a&&r.a.createElement(te.a,{item:!0},a?s?r.a.createElement(r.a.Fragment,null,r.a.createElement(nt.a,{style:{cursor:"pointer"},onClick:function(){v&&(c&&(S?c.apply(void 0,[v].concat(Object(Za.a)(S))):c(v)),P())}}),r.a.createElement(at.a,{style:{cursor:"pointer"},onClick:function(){y(E),x(w),P()}})):r.a.createElement(ya.a,{style:{cursor:"pointer"},onClick:P}):null))};var lt=function(e){var a=e.profile,t=r.a.useState({}),n=Object(u.a)(t,2),l=n[0],o=n[1],c=r.a.useContext(x),i=Ie();r.a.useEffect((function(){E.a.get("/user/profile",{params:{token:c,u_id:a}}).then((function(e){var a=e.data;console.log(a),o(a)})).catch((function(e){console.error(e)}))}),[a,c]);var m=i.toString()===a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h4"},"Profile"),r.a.createElement(ke.a,{subheader:r.a.createElement(We.a,null,"Profile Details")},r.a.createElement(Ce.a,{key:"name"},r.a.createElement(rt,{editable:m,masterValue:l.name_last,slaveValues:[l.name_first],master:function(e){return r.a.createElement(ne.a,Object.assign({label:"Last Name"},e))},slaves:[function(e){return r.a.createElement(ne.a,Object.assign({label:"First Name"},e))}],onSave:function(e,a){E.a.put("/user/profile/setname",{token:c,name_first:a,name_last:e}).then((function(){console.log("all good")})).catch((function(e){console.error(e)}))}})),r.a.createElement(Ce.a,{key:"email"},r.a.createElement(rt,{editable:m,masterValue:l.email,master:function(e){return r.a.createElement(ne.a,Object.assign({label:"Email"},e))},onSave:function(e){E.a.put("/user/profile/setemail",{token:c,email:e}).then((function(){console.log("all good")})).catch((function(e){console.error(e)}))}})),r.a.createElement(Ce.a,{key:"handle"},r.a.createElement(rt,{editable:m,masterValue:l.handle_str,master:function(e){return r.a.createElement(ne.a,Object.assign({label:"Handle"},e))},onSave:function(e){E.a.put("/user/profile/sethandle",{token:c,handle_str:e}).then((function(){console.log("all good")})).catch((function(e){console.error(e)}))}}))))};var ot=function(e){var a=e.match.params.profile;return r.a.createElement(we,{menu:r.a.createElement(Ge,null),body:r.a.createElement(lt,{profile:a})})};var ct=function(e){var a=r.a.useContext(x);return console.log(a),a?r.a.createElement(d.b,e):r.a.createElement(d.a,{to:"/login"})},it=t(130),mt=t.n(it);E.a.defaults.baseURL=P,E.a.defaults.headers.put["Content-Type"]="application/x-www-form-urlencoded",E.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",E.a.defaults.headers.delete["Content-Type"]="application/x-www-form-urlencoded",E.a.interceptors.request.use((function(e){return"put"!==e.method&&"post"!==e.method&&"delete"!==e.method||(e.data=mt.a.stringify(e.data)),e}));var ut=function(){var e=r.a.useState(localStorage.getItem("token")),a=Object(u.a)(e,2),t=a[0],n=a[1];function l(e,a){localStorage.setItem("token",e),localStorage.setItem("u_id",a),n(e)}return r.a.createElement(S,{value:t},r.a.createElement(s.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/login",render:function(e){return r.a.createElement(Va,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(d.b,{exact:!0,path:"/register",render:function(e){return r.a.createElement(Ga,Object.assign({},e,{setAuth:l}))}}),r.a.createElement(d.b,{exact:!0,path:"/forgot_password",component:Qa}),r.a.createElement(d.b,{exact:!0,path:"/reset_password",component:Ya}),r.a.createElement(ct,{exact:!0,path:"/",component:$e}),r.a.createElement(ct,{path:"/profile/:profile",component:ot}),r.a.createElement(ct,{path:"/channel/:channel_id",component:Ma}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=t(72),dt=t(133),ft=Object(dt.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:st.a.A400},background:{default:"#fff"}}}),pt=t(22),Et=t(131);o.a.render(r.a.createElement(i.a,{theme:ft},r.a.createElement(pt.a,{utils:Et.a},r.a.createElement(c.a,null),r.a.createElement(ut,null),r.a.createElement(m.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[158,1,2]]]);
//# sourceMappingURL=main.b5f4a962.chunk.js.map