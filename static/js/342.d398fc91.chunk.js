"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342,838],{6683:function(n,e,t){t.d(e,{o:function(){return a}});var r,i=t(168),a=t(955).ZP.main(r||(r=(0,i.Z)(["\n  background: linear-gradient(#180101, #4e0d0d);\n  min-height: 100vh;\n  \n"])))},2238:function(n,e,t){t.d(e,{qf:function(){return r},$h:function(){return i},po:function(){return a},rG:function(){return o},oU:function(){return c}});var r="https://image.tmdb.org/t/p/w500",i="acf3cca943ac5337a13eedff98e533f5",a="/trending/movie/day",o="/search/movie",c="/movie"},838:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return R}});var r,i,a,o,c,s,u,p,f,d=t(5861),l=t(885),x=t(7757),h=t.n(x),m=t(2791),g=t(168),v=t(955),b=v.ZP.form(r||(r=(0,g.Z)(["\n    padding-top: 30px;\n    padding-bottom: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),w=v.ZP.input(i||(i=(0,g.Z)(["\n    width: 150px;\n    height: 35px;\n    border-radius: 10px;\n    padding-left: 5px;\n    border: none;\n    outline: none;\n    color: #313131;\n    font-size: 16px;\n    font-family: cursive;\n    margin-right: 5px;\n\n    :focus-visible {\n        border: solid 2px #e9691f;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 260px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 300px;\n        height: 50px;\n        font-size: 20px;\n    }\n"]))),Z=v.ZP.button(a||(a=(0,g.Z)(["\n    width: 72px;\n    height: 35px;\n    border: none;\n    border-radius: 10px;\n    font-size: 16px;\n    font-family: cursive;\n    color: #fff;\n    cursor: pointer;\n    background: #e9691f;\n    transition: background 250ms ease;\n\n    :hover,\n    :focus {\n        background: #f85c01;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 100px;\n        height: 50px;\n        font-size: 20px;\n    }\n"]))),j=t(184),y=function(n){var e=n.onSubmit,t=(0,m.useState)(""),r=(0,l.Z)(t,2),i=r[0],a=r[1];return(0,j.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=i.toLowerCase().trim();e(t),a("")},children:[(0,j.jsx)(w,{type:"text",placeholder:"Movies name",value:i,onChange:function(n){a(n.currentTarget.value)}}),(0,j.jsx)(Z,{type:"submit",children:"Search"})]})},k=t(7412),P=t(501),_=t(6871),S=t(2238),q=t(1152),z=v.ZP.section(o||(o=(0,g.Z)(["\n  text-align: center;\n  padding-bottom: 60px;\n"]))),C=v.ZP.ul(c||(c=(0,g.Z)(["\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: 767px){\n        flex-direction: column;\n    }\n\n    @media screen and (min-width: 768px){\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: -30px;\n        margin-left: -30px;\n    }\n"]))),M=v.ZP.li(s||(s=(0,g.Z)(["\n    max-width: 240px;\n    height: 360px;\n    border-radius: 10px;\n    overflow: overlay;\n    background-color: #ec711f;\n    transform: scale(1);\n    transition: transform 250ms ease;\n\n    :hover,\n    :focus {\n        transform: scale(1.1);\n    }\n\n    @media screen and (max-width: 767px){\n        :not(:last-child){\n            margin-bottom: 30px;\n        }\n    }\n    \n    @media screen and (min-width: 768px){\n        flex-basis: calc((100% - 60px) / 2);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n\n    @media screen and (min-width: 1024px){\n        flex-basis: calc((100% - 90px) / 3);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n\n    @media screen and (min-width: 1440px){\n        flex-basis: calc((100% - 120px) / 4);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n"]))),T=v.ZP.img(u||(u=(0,g.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),U=v.ZP.img(p||(p=(0,g.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),$=v.ZP.h3(f||(f=(0,g.Z)(["\n    padding: 5px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: 400;\n    line-height: 133%;\n\n    color: #fff;\n"]))),E=t(9959),G=function(n){var e=n.films,t=(0,_.TH)();return(0,j.jsx)(z,{children:(0,j.jsx)(E.i,{children:(0,j.jsx)(C,{children:e.map((function(n){var e=n.id,r=n.title,i=n.poster_path;return(0,j.jsx)(M,{children:(0,j.jsxs)(P.rU,{to:"".concat(e),state:{from:t},children:[i?(0,j.jsx)(T,{src:"".concat(S.qf,"/").concat(i),alt:r}):(0,j.jsx)(U,{src:q,alt:"poster not available"}),(0,j.jsx)($,{children:r})]})},e)}))})})})},L=t(8479),N=t(2575),O=t(6683),R=function(){var n=(0,m.useState)(!1),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,m.useState)(null),a=(0,l.Z)(i,2),o=a[0],c=a[1],s=(0,P.lr)(),u=(0,l.Z)(s,2),p=u[0],f=u[1],x=(0,m.useState)(null),g=(0,l.Z)(x,2),v=g[0],b=g[1];(0,m.useEffect)((function(){var n=p.get("query");if(n){r(!0);var e=function(){var e=(0,d.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k.WE)(n);case 3:if((t=e.sent).results.length){e.next=7;break}return L.ZP.error("No result, please input a new search value!"),e.abrupt("return");case 7:b(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c(e.t0.message);case 13:return e.prev=13,r(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[p]);return(0,j.jsxs)(O.o,{children:[(0,j.jsx)(L.x7,{position:"top-right",toastOptions:{style:{background:"#e45b5b",padding:"16px",color:"#e9e9e9"}}}),(0,j.jsx)(y,{onSubmit:function(n){n?f({query:n}):L.ZP.error("Plese input search value!")}}),t&&(0,j.jsx)(N.BounceLoader,{color:"#e24392"}),o&&(0,j.jsx)("h2",{children:o}),v&&(0,j.jsx)(G,{films:v})]})}},2342:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return r.MoviesPage}});var r=t(838)},7412:function(n,e,t){t.d(e,{Cp:function(){return u},WE:function(){return p},zO:function(){return f}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),c=t.n(o),s=t(2238);c().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s.po,"?api_key=").concat(s.$h));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s.rG,"?api_key=").concat(s.$h,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(s.oU,"/").concat(e,"?api_key=").concat(s.$h,"&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1152:function(n,e,t){n.exports=t.p+"static/media/PosterNotAvailable.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=342.d398fc91.chunk.js.map