(this.webpackJsonpspotify_clone=this.webpackJsonpspotify_clone||[]).push([[0],{100:function(e,t,n){},150:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),i=n.n(r),s=(n(100),n(83)),o=n(8),l=n(9),d=n(47),u=n(19),b=n.n(u),j=n(26),h=n.n(j),p=n(49),f="https://test-musicloud.herokuapp.com",m=parseInt("20"),g=function(){var e=Object(p.a)(h.a.mark((function e(t,n,c){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="testmusicdata",a=t>m?"testmusicdata":"testmusicdata-lowrate",0!==n.length&&n.forEach((function(e){e.includes(c.title)&&e&&(r=e)})),!r){e.next=5;break}return e.abrupt("return","https://".concat(a,".s3.us-south.cloud-object-storage.appdomain.cloud/").concat(r));case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(h.a.mark((function e(t,n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f,"/download"),{params:{uri:t.externalUrl,title:t.title,artist:t.artist[0].name}}).then((function(e){return console.log("DONE"),{name:e.data.name,dest:e.data.dest}}));case 2:return c=e.sent,e.abrupt("return",{name:c.name,dest:c.dest});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(h.a.mark((function e(t,n,c){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f,"/upload"),{params:{name:t,dest:n,internetSpeed:c}}).then((function(e){return e.data}));case 2:return a=e.sent,e.abrupt("return",{data:a});case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),v="https://test-musicloud.herokuapp.com";function y(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(),s=Object(l.a)(i,2),o=s[0],d=s[1],u=Object(c.useState)(),j=Object(l.a)(u,2),h=j[0],p=j[1];return Object(c.useEffect)((function(){b.a.post("".concat(v,"/login"),{code:e}).then((function(e){r(e.data.accessToken),d(e.data.refreshToken),p(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(e){console.log(e),window.location="/"}))}),[e]),Object(c.useEffect)((function(){!function(){if(o&&h){var e=setInterval((function(){b.a.post("".concat(v,"/refresh"),{refreshToken:o}).then((function(e){r(e.data.accessToken),p(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(h-60))}}()}),[o,h]),a}console.log("BACKEND: ",v);var w=n(27),k=n.n(w),S=n(50),T=n(177),I=n(178),E=n(175),N=n(187),L=n(176),C=n(12),U=n(78),B=n.n(U),A=(n(56),n(2)),P=function(e){var t=e.track,n=e.chooseTrack,c=e.input;return Object(A.jsxs)("div",{id:"track",style:{cursor:"pointer",display:"flex",margin:"1rem",alignItems:"center"},onClick:function(){n(t),c.style.display="none"},children:[Object(A.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"}}),Object(A.jsxs)("div",{style:{marginLeft:"1.2rem"},children:[Object(A.jsxs)(E.a,{variant:"subtitle1",children:[" ",Object(A.jsx)("strong",{children:t.title})," "]}),Object(A.jsx)(E.a,{variant:"body2",children:t.artist[0].name})]})]})},_=Object(L.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(S.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),D=function(e){var t=e.search,n=e.setSearch,c=e.result,a=(e.setResult,e.setPlayingTrack,e.chooseTrack),r=_(),i=document.getElementById("searchWindow");return Object(A.jsxs)("div",{className:r.root,children:[Object(A.jsx)(T.a,{position:"fixed",children:Object(A.jsxs)(I.a,{children:[Object(A.jsx)(E.a,{className:r.title,variant:"h5",noWrap:!0,children:"MUSI-CLOUD"}),Object(A.jsxs)("div",{className:r.search,children:[Object(A.jsx)("div",{className:r.searchIcon,children:Object(A.jsx)(B.a,{})}),Object(A.jsx)(N.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){n(e.target.value),""!=e.target.value&&t?i.style.display="block":i.style.display="none"},value:t})]})]})}),Object(A.jsx)("div",{id:"searchWindow",children:c?c.map((function(e){return Object(A.jsx)(P,{track:e,chooseTrack:a,input:i},e.uri)})):"Nothing here"})]})},R=n(79),M=n(179),z=n(181),F=n(180),J=n(182),G=n(80),H=n.n(G),K=n(81),W=n.n(K),Y=n(82),q=n.n(Y),Q=n(186),V=new k.a({clientId:"259736e82b7345488052a954c68c9cbc"}),X=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(V.setAccessToken(e),!t)return n([]);if(e){var a=!1;V.searchTracks(t).then((function(e){a||n(e.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){if(c){if(t.height>e.height)return t}else if(t.height<e.height)return t;return e}),e.album.images[0]);return{artist:e.artists,title:e.name,uri:e.uri,albumUrl:t.url,externalUrl:e.external_urls.spotify}})))}))}},Z=Object(L.a)((function(e){return{root:{display:"flex",background:"#cae6e8"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"10rem",height:"inherit"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}})),$=new k.a({clientId:"259736e82b7345488052a954c68c9cbc"}),ee=parseInt("20"),te=function(e){e.index;var t=e.accessToken,n=e.track,a=e.speed,r=e.setPlayingTrack,i=Z(),s=(Object(R.a)(),Object(c.useState)([{artist:[{name:"Artist Name"}],title:"Song name",albumUrl:"https://www.thefennvoice.org/.a/6a017d3e8f0065970c022ad3c481a6200d-pi"}])),o=Object(l.a)(s,2),d=o[0],u=o[1];return Object(c.useEffect)((function(){t&&($.setAccessToken(t),function(e){var n=e.Key._text;n=a<ee?n.substr(0,n.length-8):n.substr(0,n.length-4),X(t,n,u,!0)}(n))}),[t]),Object(A.jsx)("div",{style:{margin:"1rem auto",width:"90%"},children:Object(A.jsxs)(M.a,{className:i.root,children:[Object(A.jsx)(F.a,{className:i.cover,image:d[0]?d[0].albumUrl:"Image",title:"Live from space album cover"}),Object(A.jsxs)("div",{className:i.details,children:[Object(A.jsxs)(z.a,{className:i.content,children:[Object(A.jsx)(E.a,{component:"div",variant:"h6",style:{width:"200px",whiteSpace:"nowrap"},children:Object(A.jsx)(Q.a,{component:"div",textOverflow:"ellipsis",overflow:"hidden",children:Object(A.jsx)("strong",{children:d[0]?d[0].title:"SONG NAME"})})}),Object(A.jsx)(E.a,{variant:"subtitle2",color:"textSecondary",children:d[0]?d[0].artist[0].name:"Artist"})]}),Object(A.jsxs)("div",{className:i.controls,children:[Object(A.jsx)(J.a,{"aria-label":"previous",children:Object(A.jsx)(H.a,{})}),Object(A.jsx)("a",{onClick:function(){return e=d[0],void r(e);var e},children:Object(A.jsx)(J.a,{"aria-label":"play/pause",children:Object(A.jsx)(W.a,{className:i.playIcon})})}),Object(A.jsx)(J.a,{"aria-label":"next",children:Object(A.jsx)(q.a,{})})]})]})]})})},ne=function(e){var t=e.accessToken,n=e.result,c=e.speed,a=e.setPlayingTrack,r=e.setUrlName;return Object(A.jsxs)("div",{style:{width:"80%",margin:"1rem auto"},children:[Object(A.jsx)(E.a,{variant:"h3",component:"h4",children:"Library"}),Object(A.jsx)("div",{className:"homegrid",children:n.map((function(e,n){return Object(A.jsx)(te,{accessToken:t,track:e,speed:c,setPlayingTrack:a,setUrlName:r},n)}))})]})},ce=n(183),ae=(n(150),function(e){var t=e.track,n=e.url,a=Object(c.useState)(n),r=Object(l.a)(a,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){s(n)}),[n,t]),Object(A.jsxs)("div",{id:"container",children:[Object(A.jsx)("img",{src:t.albumUrl,width:"100",height:"100",alt:"",id:"img"}),Object(A.jsx)("h1",{className:"title",children:t?t.title:"Song Name"}),Object(A.jsx)("audio",{controls:!0,style:{width:"95%",marginLeft:"-4rem"},autoPlay:!0,src:i,type:"audio/mpeg"})]})}),re=!0,ie=function(e){var t=e.track,n=e.speed,a=Object(c.useState)(""),r=Object(l.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)([]),u=Object(l.a)(o,2),j=u[0],h=u[1],p=function(){g(n,j,t).then((function(e){s(e)}))};return Object(c.useEffect)((function(){b.a.get("".concat("https://test-musicloud.herokuapp.com","/list"),{params:{internetSpeed:n}}).then((function(e){JSON.parse(e.data).ListBucketResult.Contents.forEach((function(e){h((function(t){return[].concat(Object(d.a)(t),[e.Key._text])}))}))})),p()}),[]),Object(c.useEffect)((function(){p()}),[t]),i&&(re=!1),Object(A.jsx)("div",{children:i?Object(A.jsx)("div",{style:{width:"100%",position:"fixed",bottom:0,background:"linear-gradient(90deg, rgba(157,89,203,1) 0%, rgba(255,104,104,1) 50%, rgba(233,180,105,1) 100%)",padding:"1rem 2rem",textAlign:"center"},children:Object(A.jsx)(ae,{track:t,url:i})}):re?Object(A.jsxs)("div",{style:{width:"100%",position:"fixed",bottom:0,paddingBottom:"1rem",textAlign:"center",background:"linear-gradient(90deg, rgba(157,89,203,1) 0%, rgba(255,104,104,1) 50%, rgba(233,180,105,1) 100%)"},children:[Object(A.jsxs)("h2",{children:["Fetching ",t.title]}),p()]}):Object(A.jsxs)("div",{style:{width:"100%",position:"fixed",bottom:0,paddingBottom:"1rem",textAlign:"center",background:"linear-gradient(90deg, rgba(157,89,203,1) 0%, rgba(255,104,104,1) 50%, rgba(233,180,105,1) 100%)"},children:[Object(A.jsx)("h2",{children:"Song Not found in Library"}),Object(A.jsx)(ce.a,{color:"primary",id:"btn",variant:"contained",onClick:function(){var e=document.getElementById("btn");e.innerHTML="Downloading...",O(t,n).then((function(t){e.innerHTML="Uploading...",console.log(t),x(t.name,t.dest,n).then((function(t){e.innerHTML="Upload Successful",console.log(t.data)}))}))},children:"Add to Library"})]})})},se=n(188),oe=n(184),le=Object(L.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),de=function(){var e=le(),t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){r(!a)}),[]),Object(A.jsx)("div",{children:Object(A.jsx)(se.a,{className:e.backdrop,open:a,children:Object(A.jsx)(oe.a,{color:"secondary"})})})},ue=new k.a({clientId:"259736e82b7345488052a954c68c9cbc"}),be=function(e){var t=e.code,n=e.speed,a=y(t),r=Object(c.useState)(),i=Object(l.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)([]),j=Object(l.a)(u,2),h=j[0],p=j[1],f=Object(c.useState)([]),m=Object(l.a)(f,2),g=m[0],O=m[1],x=Object(c.useState)(),v=Object(l.a)(x,2),w=v[0],k=v[1];return Object(c.useEffect)((function(){n&&(console.log("Your Internet SPEED is: ",n),b.a.get("".concat("https://test-musicloud.herokuapp.com","/list"),{params:{internetSpeed:n}}).then((function(e){return JSON.parse(e.data)})).then((function(e){e.ListBucketResult.Contents.forEach((function(e){p((function(t){return[].concat(Object(d.a)(t),[e])}))}))})))}),[n]),Object(c.useEffect)((function(){a&&ue.setAccessToken(a)}),[a]),Object(c.useEffect)((function(){X(a,s,O)}),[a,s]),Object(A.jsxs)("div",{children:[Object(A.jsx)(D,{search:s,setSearch:o,result:g,setResult:O,setPlayingTrack:k,chooseTrack:function(e){o(""),k(e),O([])}}),Object(A.jsx)("div",{style:{marginTop:"5rem"}}),0==h.length&&Object(A.jsx)("div",{children:Object(A.jsx)(de,{})}),0!==h.length&&Object(A.jsxs)("div",{children:[Object(A.jsx)(ne,{result:h,accessToken:a,speed:n,setPlayingTrack:k}),Object(A.jsx)("div",{style:{marginBottom:"10rem"}}),w&&Object(A.jsx)(ie,{track:w,speed:n})]})]})},je="https://accounts.spotify.com/authorize?client_id=".concat("259736e82b7345488052a954c68c9cbc","&response_type=code&redirect_uri=").concat("https://test-musicloud.herokuapp.com/","&scope=").concat("streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"),he=function(){return Object(A.jsx)("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#ebebeb"},children:Object(A.jsx)("a",{href:je,style:{textDecoration:"none"},children:Object(A.jsx)(ce.a,{color:"secondary",variant:"contained",size:"large",children:"Login to MUSICLOUD"})})})},pe=n(84),fe=n(185),me=Object(pe.a)({palette:{primary:{light:"#339ba5",main:"#00838f",dark:"#005b64",contrastText:"#fff"},secondary:{light:"#df6843",main:"#d84315",dark:"#972e0e",contrastText:"#fff"}}}),ge=new URLSearchParams(window.location.search).get("code");var Oe=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(A.jsxs)(fe.a,{theme:me,children:[function(){function e(){console.log("Checking your network speed, please wait..."),window.setTimeout(t,1)}function t(){var e,t,n=new Image;n.onload=function(){t=(new Date).getTime(),function(){var n=(((8388608/((t-e)/1e3)).toFixed(2)/1024).toFixed(2)/1024).toFixed(2);(8*n).toFixed(2),a(n)}()},n.onerror=function(e,t){console.error("Invalid image, or error downloading")};var c="?nnn="+(e=(new Date).getTime());n.src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Pizigani_1367_Chart_1MB.jpg"+c}window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e)}(),ge?Object(A.jsx)(be,{code:ge,speed:n}):Object(A.jsx)(he,{})]})},xe=function(){return Object(A.jsx)(s.a,{children:Object(A.jsx)(o.c,{children:Object(A.jsx)(o.a,{path:"/",component:Oe,exact:!0})})})};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(xe,{})}),document.getElementById("root"))},56:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.e6e4e087.chunk.js.map