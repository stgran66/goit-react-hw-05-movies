"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a=e(861),c=e(885),u=e(687),i=e.n(u),s=e(791),o=e(470),p=e(52),f=e(168),d=e(444).ZP.div(r||(r=(0,f.Z)(["\n  ul {\n    list-style-type: none;\n    padding-left: 0;\n\n    li {\n      border: 1px solid black;\n      border-radius: 10px;\n\n      padding: 10px 20px;\n\n      :not(:last-child) {\n        margin-bottom: 10px;\n      }\n      :nth-child(2n) {\n        background-color: #a31525;\n        color: white;\n      }\n    }\n  }\n  div {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid black;\n  }\n"]))),l=e(184),h=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],u=(0,s.useState)(null),f=(0,c.Z)(u,2),h=f[0],v=f[1],x=(0,o.UO)().movieID;return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.tx)(x);case 3:t=n.sent,e=t.data.results,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[x]),(0,l.jsxs)(d,{children:[e.length>0?(0,l.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.content,r=n.author,a=n.created_at;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:(0,l.jsxs)("strong",{children:["Author: ",r]})}),(0,l.jsxs)("p",{children:["Date: ",new Date(a).toLocaleDateString()]})]}),(0,l.jsx)("p",{children:e})]},t)}))}):(0,l.jsx)("p",{children:"There are no reviews yet..."}),h&&(0,l.jsx)("p",{children:h})]})}},52:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return d},Ph:function(){return p},tx:function(){return l},vq:function(){return f}});var r=e(861),a=e(687),c=e.n(a),u=e(44),i="https://api.themoviedb.org/3",s="583f93eb1f9f03306dbe56dd02574154",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",t=i+"/trending/movie/day"+"?api_key=".concat(s),n.next=4,u.ZP.get(t);case 4:return e=n.sent,n.abrupt("return",e.data.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i+"/search/movie?api_key=".concat(s,"&query=").concat(t),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i+"/movie/".concat(t,"?api_key=").concat(s),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i+"/movie/".concat(t,"/credits?api_key=").concat(s),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i+"/movie/".concat(t,"/reviews?api_key=").concat(s),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.ca111a21.chunk.js.map