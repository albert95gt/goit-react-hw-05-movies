"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342,499],{6683:function(n,e,t){t.d(e,{o:function(){return c}});var r,a=t(168),c=t(955).ZP.main(r||(r=(0,a.Z)(["\n  background: linear-gradient(#180101, #4e0d0d);\n  \n"])))},2238:function(n,e,t){t.d(e,{qf:function(){return r},$h:function(){return a},po:function(){return c},rG:function(){return o},oU:function(){return i}});var r="https://image.tmdb.org/t/p/w500",a="acf3cca943ac5337a13eedff98e533f5",c="/trending/movie/day",o="/search/movie",i="/movie"},5499:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return G}});var r,a,c,o,i,u,s=t(5861),f=t(885),p=t(7757),l=t.n(p),h=t(2791),d=t(184),v=function(n){var e=n.onSubmit,t=(0,h.useState)(""),r=(0,f.Z)(t,2),a=r[0],c=r[1];return(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=a.toLowerCase().trim();e(t),c("")},children:[(0,d.jsx)("input",{type:"text",placeholder:"search films",value:a,onChange:function(n){c(n.currentTarget.value)}}),(0,d.jsx)("button",{type:"submit",children:"Search"})]})},m=t(7412),x=t(501),g=t(6871),b=t(2238),Z=t(1152),w=t(168),j=t(955),k=j.ZP.section(r||(r=(0,w.Z)(["\n  text-align: center;\n"]))),y=j.ZP.ul(a||(a=(0,w.Z)(["\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),P=j.ZP.li(c||(c=(0,w.Z)(["\n    width: 240px;\n    border-radius: 10px;\n    overflow: hidden;\n    background-color: #ec711f;\n    transform: scale(1);\n    transition: transform 250ms ease;\n    :not(:last-child){\n        margin-bottom: 30px;\n    }\n    :hover,\n    :focus {\n        transform: scale(1.1);\n    }\n"]))),_=j.ZP.img(o||(o=(0,w.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),S=j.ZP.img(i||(i=(0,w.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),q=j.ZP.h3(u||(u=(0,w.Z)(["\n    padding: 5px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: 400;\n    line-height: 133%;\n\n    color: #fff;\n"]))),C=t(9959),T=function(n){var e=n.films,t=(0,g.TH)();return(0,d.jsx)(k,{children:(0,d.jsx)(C.i,{children:(0,d.jsx)(y,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,d.jsx)(P,{children:(0,d.jsxs)(x.rU,{to:"".concat(e),state:{from:t},children:[a?(0,d.jsx)(_,{src:"".concat(b.qf,"/").concat(a),alt:r}):(0,d.jsx)(S,{src:Z,alt:"poster not available"}),(0,d.jsx)(q,{children:r})]})},e)}))})})})},U=t(8479),$=t(2575),E=t(6683),G=function(){var n=(0,h.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(null),c=(0,f.Z)(a,2),o=c[0],i=c[1],u=(0,x.lr)(),p=(0,f.Z)(u,2),g=p[0],b=p[1],Z=(0,h.useState)(null),w=(0,f.Z)(Z,2),j=w[0],k=w[1];(0,h.useEffect)((function(){var n=g.get("query");if(n){r(!0);var e=function(){var e=(0,s.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.WE)(n);case 3:if((t=e.sent).results.length){e.next=7;break}return U.ZP.error("No result, please input a new search value!"),e.abrupt("return");case 7:k(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i(e.t0.message);case 13:return e.prev=13,r(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]);return(0,d.jsxs)(E.o,{children:[(0,d.jsx)(U.x7,{toastOptions:{style:{background:"#e45b5b",padding:"16px",color:"#e9e9e9"}}}),(0,d.jsx)(v,{onSubmit:function(n){n?b({query:n}):U.ZP.error("Plese input search value!")}}),t&&(0,d.jsx)($.BounceLoader,{color:"#e24392"}),o&&(0,d.jsx)("h2",{children:o}),j&&(0,d.jsx)(T,{films:j})]})}},2342:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return r.MoviesPage}});var r=t(5499)},7412:function(n,e,t){t.d(e,{Cp:function(){return s},WE:function(){return f},zO:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u=t(2238);i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u.po,"?api_key=").concat(u.$h));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u.rG,"?api_key=").concat(u.$h,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(u.oU,"/").concat(e,"?api_key=").concat(u.$h,"&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1152:function(n,e,t){n.exports=t.p+"static/media/PosterNotAvailable.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=342.eee9714f.chunk.js.map