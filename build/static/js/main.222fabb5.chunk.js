(this["webpackJsonpreact-smooth_skew-scrolling"]=this["webpackJsonpreact-smooth_skew-scrolling"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(2),o=n.n(a),c=n(3);var s=["https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1497&q=80","https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80","https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80","https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"];var u=function(){var e=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(r.useState)(e),n=Object(c.a)(t,2),i=n[0],a=n[1];return Object(r.useEffect)((function(){function t(){a(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),i}(),t=Object(r.useRef)(),n=Object(r.useRef)(),a={ease:.1,current:0,previous:0,rounded:0};Object(r.useEffect)((function(){document.body.style.height="".concat(n.current.getBoundingClientRect().height,"px")}),[e.height]),Object(r.useEffect)((function(){requestAnimationFrame((function(){return o()}))}),[]);var o=function t(){a.current=window.scrollY,a.previous+=(a.current-a.previous)*a.ease,a.rounded=Math.round(100*a.previous)/100;var r=5.5*+((a.current-a.rounded)/e.width);n.current.style.transform="translate3d(0, -".concat(a.rounded,"px, 0) skewY(").concat(r,"deg)"),requestAnimationFrame((function(){return t()}))};return i.a.createElement("div",{ref:t,className:"App"},i.a.createElement("div",{ref:n,className:"scroll"},s.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{key:t,className:"img-container"},i.a.createElement("img",{src:e,alt:"people ".concat(t)})),i.a.createElement("h2",null,"Skewww ",i.a.createElement("span",{className:"outline"}," Scroll")))}))))};n(9);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.222fabb5.chunk.js.map