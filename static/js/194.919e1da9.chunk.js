"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{1454:function(n,e,t){t.d(e,{$:function(){return s}});var r,a=t(2575),i=t(168),c=t(955).ZP.div(r||(r=(0,i.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),o=t(184),s=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(a.BounceLoader,{color:"#ec711f"})})}},6683:function(n,e,t){t.d(e,{o:function(){return i}});var r,a=t(168),i=t(955).ZP.main(r||(r=(0,a.Z)(["\n  background: linear-gradient(#180101, #4e0d0d);\n  min-height: 100vh;\n  \n"])))},2238:function(n,e,t){t.d(e,{qf:function(){return r},$h:function(){return a},po:function(){return i},rG:function(){return c},oU:function(){return o}});var r="https://image.tmdb.org/t/p/w500",a="acf3cca943ac5337a13eedff98e533f5",i="/trending/movie/day",c="/search/movie",o="/movie"},1194:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return T}});var r,a,i,c,o,s,u,f=t(5861),p=t(885),l=t(7757),d=t.n(l),x=t(7412),m=t(2791),h=t(501),v=t(6871),g=t(2238),w=t(168),Z=t(955),b=Z.ZP.section(r||(r=(0,w.Z)(["\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),j=Z.ZP.h2(a||(a=(0,w.Z)(["\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: 500;\n    font-size: 24px;\n    margin-bottom: 30px;\n    color: #ec711f;\n"]))),y=Z.ZP.ul(i||(i=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: 767px){\n        flex-direction: column;\n    }\n\n    @media screen and (min-width: 768px){\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: -30px;\n        margin-left: -30px;\n    }\n"]))),k=Z.ZP.li(c||(c=(0,w.Z)(["\n    max-width: 240px;\n    border-radius: 10px;\n    overflow: overlay;\n    background-color: #ec711f;\n    transform: scale(1);\n    transition: transform 250ms ease;\n\n    :hover,\n    :focus {\n        transform: scale(1.1);\n    }\n\n    @media screen and (max-width: 767px){\n        :not(:last-child){\n            margin-bottom: 30px;\n        }\n    }\n    \n    @media screen and (min-width: 768px){\n        flex-basis: calc((100% - 60px) / 2);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n\n    @media screen and (min-width: 1024px){\n        flex-basis: calc((100% - 90px) / 3);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n\n    @media screen and (min-width: 1440px){\n        flex-basis: calc((100% - 120px) / 4);\n        margin-top: 30px;\n        margin-left: 30px;\n    }\n"]))),P=Z.ZP.img(o||(o=(0,w.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),_=Z.ZP.img(s||(s=(0,w.Z)(["\n    width: 290px;\n    height: 320px;\n    object-fit: fill;\n"]))),$=Z.ZP.h3(u||(u=(0,w.Z)(["\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 5px;\n    font-weight: 400;\n    line-height: 133%;\n\n    color: #fff;\n"]))),C=t(5621),U=t(1152),q=t(184),G=function(n){var e=n.films,t=(0,v.TH)();return(0,q.jsx)(b,{children:(0,q.jsxs)(C.i,{children:[(0,q.jsx)(j,{children:"Trending today:"}),(0,q.jsx)(y,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,q.jsx)(k,{children:(0,q.jsxs)(h.rU,{to:"movies/".concat(e),state:{from:t},children:[a?(0,q.jsx)(P,{src:"".concat(g.qf,"/").concat(a),alt:r}):(0,q.jsx)(_,{src:U,alt:"poster not available"}),(0,q.jsx)($,{children:r})]})},e)}))})]})})},H=t(1454),S=t(6683),T=function(){var n=(0,m.useState)(!1),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,m.useState)(null),i=(0,p.Z)(a,2),c=i[0],o=i[1],s=(0,m.useState)([]),u=(0,p.Z)(s,2),l=u[0],h=u[1];return(0,m.useEffect)((function(){r(!0);var n=function(){var n=(0,f.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Cp)();case 3:e=n.sent,h(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0.message);case 10:return n.prev=10,r(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,q.jsxs)(S.o,{children:[c&&(0,q.jsx)("h2",{children:c}),(0,q.jsx)(G,{films:l}),t&&(0,q.jsx)(H.$,{color:"#ec711f"})]})}},7412:function(n,e,t){t.d(e,{Cp:function(){return u},WE:function(){return f},zO:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c),s=t(2238);o().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(s.po,"?api_key=").concat(s.$h));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(s.rG,"?api_key=").concat(s.$h,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(s.oU,"/").concat(e,"?api_key=").concat(s.$h,"&append_to_response=credits,reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1152:function(n,e,t){n.exports=t.p+"static/media/PosterNotAvailable.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=194.919e1da9.chunk.js.map