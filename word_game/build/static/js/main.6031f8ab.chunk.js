(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),c=Object(n.createContext)(),o=function(e){var t=e.reducer,a=e.initialState,o=e.children;return r.a.createElement(c.Provider,{value:Object(n.useReducer)(t,a)},o)},s=function(){return Object(n.useContext)(c)}},20:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/brainLogo.8e02dfbf.svg"},32:function(e,t,a){},33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},40:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=(a(38),a(7)),l=a(10),i=a(4),u=a(115),m=(a(40),a(2)),d=function(e){return r.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",flexWrap:"wrap"}},r.a.createElement("i",{style:{margin:"0 auto",fontSize:"6rem"},className:"hoverPushAnimation "+e.iconSrc}),e.descText&&r.a.createElement("p",{style:{display:"block",textAlign:"center",width:"100%",margin:"0"}},e.descText))},f=(a(20),function(e){var t=e.children;return r.a.createElement("div",{className:"fullPageContainer gradientBackground"},t,r.a.createElement("div",{id:"GameOverview",className:"fullContainer maxWidth60"},r.a.createElement("div",{className:"fourPartGrid"},r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/wordgame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-language",descText:"WORD GAME"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/reactiongame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-language",descText:"CLICK FAST"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/numbergame"},r.a.createElement(d,{hover:!0,iconSrc:"fas fa-sort-numeric-up",descText:"NUMBER GAME"})),r.a.createElement(m.b,{className:"boxLink undecoratedLink",to:"/games/wordgame"},r.a.createElement("p",null,"COMING SOON")))))}),g=a(9),p=a.n(g),E=function(){var e=Object(u.g)().pathname,t=Object(l.b)(),a=Object(i.a)(t,2),n=a[0],c=n.user,o=n.loggedIn,s=a[1];return r.a.createElement("div",{className:"centerAll userInfo"},o?r.a.createElement("div",{className:"somePadding undecoratedLink centerAll"},r.a.createElement("p",{onClick:function(){p()("".concat("/api","/logout")).then(function(e){return s({type:"logOut"})}).catch(function(e){console.log(e),s({type:"logOut"})})},style:{margin:"0 1rem"}},"LOG OUT"),r.a.createElement("p",{id:"userInfoWelcome"},"welcome ",c.name)):r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/"===e?"/account/login":"".concat(e,"/account/login")},"LOG IN"))},b=function(){return r.a.createElement("nav",{className:"topNav"},r.a.createElement("ul",{className:"navList"},r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/"},"HOME"),r.a.createElement(m.b,{className:"somePadding undecoratedLink",to:"/dashboard"},"DASHBOARD"),r.a.createElement(E,null)))},h=(a(64),function(e){var t=e.close,a=e.customStyle;return r.a.createElement("div",{className:"centerAll pointer closeButton",style:a,onClick:t},r.a.createElement("i",{className:"fas fa-times noMargin"}))}),v=function(e){var t=e.children,a=e.close;return r.a.createElement("div",{style:{position:"absolute",top:"5rem",width:"100%",display:"flex",zIndex:4}},r.a.createElement("div",{style:{margin:"0 auto",position:"relative",maxWidth:"90%"}},r.a.createElement(h,{close:a,customStyle:{position:"absolute",right:"-1rem",top:"-1rem"}}),t))},w=a(29),O=a.n(w),y=function(){return r.a.createElement("div",{id:"welcomeBanner",className:"centerAll"},r.a.createElement("div",{className:"callToAction"},r.a.createElement("div",{className:"centerAll logo"},r.a.createElement("img",{src:O.a,alt:"brain logo"})),r.a.createElement("h1",null,"ARE YOU A GOOD MONKEY?!"),r.a.createElement(m.b,{id:"enterButton",className:"mainButton",to:"/dashboard"},"ENTER")))},S=a(13),N=(a(32),function(e){var t=e.className,a=void 0===t?"":t,c=e.delay,o=void 0===c?0:c,s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){return m(!0)},o);return function(){clearTimeout(e)}},[]),u&&r.a.createElement("div",{id:"loadingScreen",className:"flexColumnCenter ".concat(a)},r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"dot1"}),r.a.createElement("div",{className:"dot2"})),"LOADING")}),k=r.a.lazy(function(){return a.e(5).then(a.bind(null,429))}),j=r.a.lazy(function(){return a.e(6).then(a.bind(null,430))}),A=r.a.lazy(function(){return a.e(7).then(a.bind(null,431))}),I=r.a.lazy(function(){return a.e(8).then(a.bind(null,432))}),L=r.a.lazy(function(){return a.e(9).then(a.bind(null,433))}),T=Object(n.memo)(function(e){var t=e.close,a=Object(u.f)().push,c=Object(n.useState)({userName:"",password:"",passwordRe:"",email:""}),o=Object(i.a)(c,2),m=o[0],d=o[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),E=g[0],b=g[1],h=Object(n.useState)({message:""}),v=Object(i.a)(h,2),w=v[0],O=v[1],y=Object(l.b)(),T=Object(i.a)(y,2)[1],x=Object(n.useState)(""),C=Object(i.a)(x,2),G=C[0],P=C[1];Object(n.useEffect)(function(){return T({type:"blockScroll"}),function(){T({type:"unblockScroll"})}},[]);var D=function(e){var t=Object(s.a)({},m,Object(S.a)({},e.target.name,e.target.value));d(t)},B=function(e){if(e.preventDefault(),m.password===m.passwordRe){var t=new FormData;t.set("userName",m.userName),t.set("email",m.email),t.set("password",m.password),p.a.post("".concat("/api","/signup"),t).then(function(e){if(!e.data||!e.data.message||!e.data.sendAgainPath)throw new Error("server failed to confirm your mail");b(e.data.sendAgainPath),O({message:e.data.message})}).catch(function(e){P("something went wrong"),setTimeout(function(){return P("")},4e3)})}else P("please check your password"),setTimeout(function(){return P("")},4e3)},z=function(e){if(e.preventDefault(),m.email.length>2&&m.password.length>5){var a=new FormData;a.set("email",m.email),a.set("password",m.password),p.a.post("".concat("/api","/login"),a,{withCredentials:!0}).then(function(e){e.data.user&&(T({type:"logIn",payload:e.data.user}),t())}).catch(function(e){if(e.response&&403===e.response.status){if(!e.res.data||!e.res.data.message||!e.res.data.sendAgainPath)return alert("server failed to confirm your mail");b(e.res.data.sendAgainPath),O({message:e.res.data.message})}else P("wrong email or password"),setTimeout(function(){return P("")},4e3)})}},R=function(e){e.preventDefault();var t=new FormData;t.set("email",m.email),p.a.post("".concat("/api","/resetpassword"),t,{withCredentials:!0}).then(function(e){O({message:"succesfully sent"}),setTimeout(function(){return O({message:""})},1e4)}).catch(function(e){P("email not found"),setTimeout(function(){return P("")},4e3)})},M=function(e,t){if(e&&t&&m.password&&m.password===m.passwordRe){var n=new FormData;n.set("password",m.password),n.set("key",e),n.set("email",t),p.a.post("".concat("/api","/createnewpassword"),n).then(function(e){O({message:"SUCCESFULLY CREATED"}),setTimeout(function(){return O({message:""})},5e3),a("login")}).catch(function(e){P("failed"),setTimeout(function(){return P("")},4e3)})}};return E?r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(N,null)},r.a.createElement(A,{sendAgain:function(e){if(e.preventDefault(),!E||!w)return alert("looks like the server fucked up! :(");p.a.get("".concat("/api","/confirmagain/").concat(E)).then(function(e){O(Object(s.a)({},w,{sent:"WAS SENT"})),setTimeout(function(){var e=w.message,t=w.sendAgainPath;O({message:e,sendAgainPath:t})},3e3)}).catch(function(e){O(Object(s.a)({},w,{sent:"FAILED"})),setTimeout(function(){var e=w.message,t=w.sendAgainPath;O({message:e,sendAgainPath:t})},3e3)})},confirm:w})):r.a.createElement("div",{className:"logSignContainer gradientBackground ".concat(G?"animationShake":"")},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(N,null)},G&&r.a.createElement("p",{className:"errorMessage"},G),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"*/login",render:function(){return r.a.createElement(k,{onSubmit:z,onChange:D,confirm:w.message})}}),r.a.createElement(u.a,{path:"*/signup",render:function(){return r.a.createElement(j,{onSubmit:B,onChange:D})}}),r.a.createElement(u.a,{path:"*/resetpassword",render:function(){return r.a.createElement(I,{onSubmit:R,onChange:D,confirm:w.message})}}),r.a.createElement(u.a,{path:"*/createnewpassword/:key/:email",render:function(){return r.a.createElement(L,{onChange:D,onSubmit:M})}}))))}),x=r.a.lazy(function(){return a.e(2).then(a.bind(null,428))}),C=r.a.lazy(function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,434))}),G=r.a.lazy(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,200))}),P=function(){var e=Object(l.b)(),t=Object(i.a)(e,2),a=t[0],c=a.user,o=a.loggedIn,s=a.overflowHidden,m=t[1];Object(n.useEffect)(function(){var e=localStorage.getItem("monkeyGameSession");if(e&&"{}"!==e)m({type:"logIn",payload:JSON.parse(e)});else{var t=localStorage.getItem("monkeyGameGuestSession");m(t&&"{}"!==t?{type:"createGuest",payload:JSON.parse(t)}:{type:"createGuest",payload:{type:"guest",name:"Guest",email:null,scores:{word:0,react:0,number:0}}})}},[]);var d=function(e){e.preventDefault(),c&&(o&&c.email?localStorage.setItem("monkeyGameSession",JSON.stringify(c)):localStorage.setItem("monkeyGameGuestSession",JSON.stringify(c)))};Object(n.useEffect)(function(){return window.addEventListener("beforeunload",d),function(){window.removeEventListener("beforeunload",d)}},[c]);var g=function(e){var t=e.location.pathname.split("/account");e.push(t[0]||"/")};return r.a.createElement("div",{className:s?"App overflowHidden":"App"},r.a.createElement(u.a,{component:b}),r.a.createElement(u.a,{path:"*/account",render:function(e){var t=e.history;return e.match,r.a.createElement(v,{close:function(){return g(t)}},r.a.createElement(T,{history:t,close:function(){return g(t)}}))}}),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(N,{className:"gradientBackground",delay:600})},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/user:id",component:G}),r.a.createElement(u.a,{path:"/games",component:x}),r.a.createElement(u.a,{path:"/dashboard",render:function(){return r.a.createElement(C,{loggedIn:o,user:c})}}),r.a.createElement(u.a,{path:"/welcome",render:function(){return r.a.createElement(f,null,r.a.createElement(y,null))}}),r.a.createElement(u.a,{path:"/",render:function(){return r.a.createElement(f,null,r.a.createElement(y,null))}}))))},D=function(){return r.a.createElement(l.a,{initialState:{loggedIn:!1,guestUser:!1,overflowHidden:!1,user:{}},reducer:function(e,t){switch(t.type){case"logIn":return Object(s.a)({},e,{user:t.payload,loggedIn:!0,guestUser:!1});case"logOut":return localStorage.removeItem("monkeyGameSession"),Object(s.a)({},e,{user:{},loggedIn:!1});case"createGuest":return Object(s.a)({},e,{user:t.payload,loggedIn:!1,guestUser:!0});case"setScore":var a=Object(s.a)({},e);return a.user.scores[t.target]=t.payload,a;case"blockScroll":return Object(s.a)({},e,{overflowHidden:!0});case"unblockScroll":return Object(s.a)({},e,{overflowHidden:!1});default:return e}}},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,14,13]]]);
//# sourceMappingURL=main.6031f8ab.chunk.js.map