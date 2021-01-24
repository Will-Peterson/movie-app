(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{47:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),i=n.n(a),r=n(17),o=n.n(r),s=(n(47),n(32)),l=n(33),d=n(41),j=n(40),h=n(21),u=n(25),b=n(11),O=function(t,e){switch(e.type){case"ADD_MOVIE_TO_WATCHED":return Object(b.a)(Object(b.a)({},t),{},{watchlist:t.watchlist.filter((function(t){return t.id!==e.payload.id})),watched:[e.payload].concat(Object(u.a)(t.watched))});case"ADD_MOVIE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},t),{},{watchlist:[e.payload].concat(Object(u.a)(t.watchlist))});case"REMOVE_MOVIE_FROM_WATCHED":return Object(b.a)(Object(b.a)({},t),{},{watched:t.watched.filter((function(t){return t.id!==e.payload}))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(b.a)(Object(b.a)({},t),{},{watchlist:t.watchlist.filter((function(t){return t.id!==e.payload}))});case"MOVE_MOVIE_TO_WATCHLIST_FROM_WATCHED":return Object(b.a)(Object(b.a)({},t),{},{watched:t.watched.filter((function(t){return t.id!==e.payload.id})),watchlist:[e.payload].concat(Object(u.a)(t.watchlist))});default:return t}},m={watchlist:localStorage.getItem("wp-ma-vau-watchlist")?JSON.parse(localStorage.getItem("wp-ma-vau-watchlist")):[],watched:localStorage.getItem("wp-ma-vau-watched")?JSON.parse(localStorage.getItem("wp-ma-vau-watched")):[]},v=Object(a.createContext)(m),p=function(t){var e=Object(a.useReducer)(O,m),n=Object(h.a)(e,2),i=n[0],r=n[1];Object(a.useEffect)((function(){localStorage.setItem("wp-ma-vau-watchlist",JSON.stringify(i.watchlist)),localStorage.setItem("wp-ma-vau-watched",JSON.stringify(i.watched))}),[i]);return Object(c.jsx)(v.Provider,{value:{watchlist:i.watchlist,watched:i.watched,addMovieToWatched:function(t){r({type:"ADD_MOVIE_TO_WATCHED",payload:t})},addMovieToWatchlist:function(t){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:t})},removeMovieFromWatched:function(t){r({type:"REMOVE_MOVIE_FROM_WATCHED",payload:t})},removeMovieFromWatchlist:function(t){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:t})},moveMovieToWatchlistFromWatched:function(t){r({type:"MOVE_MOVIE_TO_WATCHLIST_FROM_WATCHED",payload:t})}},children:t.children})},x=n(15),f=n(23),g=function(t){var e=t.movie,n=Object(a.useContext)(v),i=n.addMovieToWatchlist,r=n.addMovieToWatched,o=n.watchlist,s=n.watched,l=o.find((function(t){return t.id===e.id})),d=s.find((function(t){return t.id===e.id})),j=!!l||!!d,h=!!d;return Object(c.jsxs)("div",{children:[e.poster_path?Object(c.jsx)(f.a,{rounded:!0,src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title}):Object(c.jsx)("div",{className:"poster",style:{width:"300px",height:"450px",fontSize:"30px",fontWeight:"bold",lineHeight:"450px",background:"-webkit-gradient(linear,left top,left bottom,from(#666),to(#ccc)"},children:"No Poster Available"}),Object(c.jsx)("div",{className:"",style:{fontSize:"20px",fontWeight:"bold",textAlign:"left"},children:e.title}),Object(c.jsx)("div",{style:{textAlign:"left"},children:e.release_date?e.release_date.substring(0,4):"no date"}),Object(c.jsx)(x.a,{onClick:function(){return i(e)},disabled:j,style:{position:"relative",bottom:0,left:0},variant:"dark",size:"sm",className:"float-left",children:"Add to Watchlist"}),Object(c.jsx)(x.a,{onClick:function(){return r(e)},disabled:h,variant:"dark",size:"sm",className:"mb-5 float-right",children:"Add to Watched"})]})},w="0cd6e3f93b4702231426712bba06f105",y=function(){var t=Object(a.useState)(""),e=Object(h.a)(t,2),n=e[0],i=e[1],r=Object(a.useState)([]),o=Object(h.a)(r,2),s=o[0],l=o[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{class:"input-group mb-5 mt-5",children:Object(c.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Search for movies...",value:n,onChange:function(t){t.preventDefault(),i(t.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(w,"&language=en-US&page=1&include_adult=false&query=").concat(t.target.value)).then((function(t){return t.json()})).then((function(t){t.errors?l([]):l(t.results)}))},"aria-describedby":"inputGroup-sizing-sm",class:"form-control"})}),s.length>0&&Object(c.jsx)("div",{className:"row justify-content-center text-center",children:s.map((function(t){return Object(c.jsx)("div",{style:{maxWidth:"320px"},className:"mx-3",children:Object(c.jsx)(g,{movie:t})},t.id)}))})]})},M=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y,{})})},_=n(12),N=function(t){var e=t.movie,n=t.type,i=Object(a.useContext)(v),r=i.addMovieToWatched,o=i.removeMovieFromWatchlist,s=i.removeMovieFromWatched,l=i.moveMovieToWatchlistFromWatched;return Object(c.jsxs)("div",{children:["watchlist"===n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{onClick:function(){return r(e)},variant:"dark",size:"sm",className:"mt-2",children:"Add to Watched"}),Object(c.jsx)(x.a,{onClick:function(){return o(e.id)},variant:"dark",size:"sm",className:"mt-2 float-right",children:"Remove"})]}),"watched"===n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{onClick:function(){return l(e)},variant:"dark",size:"sm",className:"mt-2",children:"Add to Watchlist"}),Object(c.jsx)(x.a,{onClick:function(){return s(e.id)},variant:"dark",size:"sm",className:"mt-2 float-right",children:"Remove"})]})]})},W=function(t){var e=t.movie,n=t.type;return Object(c.jsxs)("div",{className:"m-3",children:[e.poster_path?Object(c.jsx)(f.a,{rounded:!0,src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title}):Object(c.jsx)("div",{style:{background:"-webkit-gradient(linear,left top,left bottom,from(#666),to(#ccc)",borderRadius:".25rem",textAlign:"center",width:"200px",height:"300px",fontSize:"20px",fontWeight:"bold",lineHeight:"300px"},children:"No Poster Available"}),Object(c.jsx)(N,{type:n,movie:e})]})},T=n(13);function C(){var t=Object(_.a)(["\n  .movie-count {\n    margin-left: 20px;\n    color: #666;\n  }\n\n  .no-movies {\n    font-size: 25px;\n    color: #aaa;\n    margin-top: 60px;\n  }\n"]);return C=function(){return t},t}var k=T.a.div(C()),A=function(){var t=Object(a.useContext)(v).watchlist;return Object(c.jsx)(k,{children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("h1",{children:"Movies I Want to Watch"}),Object(c.jsxs)("div",{className:"movie-count",children:[t.length,1===t.length?" Movie":" Movies"]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row justify-content-center",children:t.length>0?Object(c.jsx)(c.Fragment,{children:t.map((function(t){return Object(c.jsx)(W,{movie:t,type:"watchlist"})}))}):Object(c.jsx)("div",{className:"no-movies",children:"Add movies to your watchlist"})})]})})};function E(){var t=Object(_.a)(["\n  .movie-count {\n    margin-left: 20px;\n    color: #666;\n  }\n\n  .no-movies {\n    font-size: 25px;\n    color: #aaa;\n    margin-top: 60px;\n  }\n"]);return E=function(){return t},t}var I=T.a.div(E()),S=function(){var t=Object(a.useContext)(v).watched;return Object(c.jsx)(I,{children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("h1",{children:"Movies I've Watched"}),Object(c.jsxs)("div",{className:"movie-count",children:[t.length,1===t.length?" Movie":" Movies",Object(c.jsx)("hr",{})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:t.length>0?Object(c.jsx)(c.Fragment,{children:t.map((function(t){return Object(c.jsx)(W,{movie:t,type:"watched"})}))}):Object(c.jsx)("div",{className:"no-movies",children:"Add movies to your watched list"})})]})})},F=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"No Match"})})},D=n(37),z=function(t){return Object(c.jsx)(D.a,{children:t.children})},V=n(16),H=n(4),R=n(24);function L(){var t=Object(_.a)(["\n  .brand {\n    padding: 0.3125rem 0;\n    font-size: 1.25rem;\n  }\n  a {\n    text-decoration: none;\n    color: white;\n  }\n"]);return L=function(){return t},t}var J=T.a.div(L()),P=function(){return Object(c.jsx)(J,{children:Object(c.jsxs)(R.a,{expand:"sm",bg:"dark",fixed:"top",variant:"dark",children:[Object(c.jsx)(V.b,{className:"brand",to:"/",children:"Movie App"}),Object(c.jsx)(R.a.Toggle,{}),Object(c.jsx)(R.a.Collapse,{children:Object(c.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsxs)(V.c,{className:"nav-link",to:"/",children:["Home ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(V.c,{className:"nav-link",to:"/watchlist",children:"Watchlist"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(V.c,{className:"nav-link",to:"/watched",children:"Watched"})})]})})]})})},B=n(58),q=n.p+"static/media/pulp-fiction.527883ad.jpg";function G(){var t=Object(_.a)(["\n  .jumbo {\n    background: url(",") no-repeat center;\n    background-size: cover;\n    color: #ccc;\n    height: 200px;\n    position: relative;\n    z-index: -2;\n  }\n\n  .overlay {\n    background-color: #000;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n"]);return G=function(){return t},t}var U=T.a.div(G(),q),K=function(){return Object(c.jsx)(U,{children:Object(c.jsxs)(B.a,{fluid:!0,className:"jumbo",children:[Object(c.jsx)("div",{className:"overlay"}),Object(c.jsxs)(D.a,{children:[Object(c.jsx)("h1",{children:"Movie DB"}),Object(c.jsx)("p",{children:"Build your personal movie list"})]})]})})},Q=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(p,{children:Object(c.jsxs)(V.a,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(K,{}),Object(c.jsx)(z,{children:Object(c.jsxs)(H.c,{children:[Object(c.jsx)(H.a,{exact:!0,path:"/",component:M}),Object(c.jsx)(H.a,{path:"/watchlist",component:A}),Object(c.jsx)(H.a,{path:"/watched",component:S}),Object(c.jsx)(H.a,{component:F})]})})]})})}}]),n}(a.Component),X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};n(54);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),X()}},[[55,1,2]]]);
//# sourceMappingURL=main.64c824d6.chunk.js.map