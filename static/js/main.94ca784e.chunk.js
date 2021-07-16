(this["webpackJsonpmemory-card-app"]=this["webpackJsonpmemory-card-app"]||[]).push([[0],{21:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(8),o=r.n(a),i=(r(21),r.p+"static/media/header-bg.775bc324.jpg"),s=r.p+"static/media/logo.ae606e29.png",u=r(4),d=r(1),l=Object(u.b)((function(e){return{currentScore:e.currentScore,maxScore:e.maxScore}}),{})((function(e){var t=e.currentScore,r=e.maxScore;return Object(d.jsxs)("header",{className:"app-header",style:{color:"black",fontSize:"20px",background:"url(".concat(i,") no-repeat center"),width:"auto",height:"200px"},children:[Object(d.jsx)("img",{src:s,className:"App-logo",alt:"logo",style:{width:"50px",height:"50px"}}),Object(d.jsx)("div",{children:"Memory Game"}),Object(d.jsxs)("div",{className:"app-header__score",children:["Current Score: ",t]}),Object(d.jsxs)("div",{className:"app-header__best-score",children:["Max score: ",r]})]})})),j=function(){return Object(d.jsx)("footer",{className:"app-header",style:{fontSize:"20px",color:"white",background:"black",left:"0",bottom:"0",width:"100%",padding:"20px 0"},children:Object(d.jsx)("div",{children:"Copyright \xa9 2021"})})},h=r(6),p=r(7),b=r(10),f=r(9),O=(r(27),r(2)),g=c.a.createContext(),x=function(){return function(e){return function(t){return Object(d.jsx)(g.Consumer,{children:function(r){return Object(d.jsx)(e,Object(O.a)(Object(O.a)({},t),{},{GameService:r}))}})}}},m=r(15),v={cards:[],loading:!0,currentScore:1,maxScore:0,uniqIdLine:[],hasError:!1},S=function(e){return{type:"CARDS_LOADED",payload:e}},y=function(){return{type:"CARDS_REQUESTED"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS_LOADED":return Object(O.a)(Object(O.a)({},e),{},{cards:t.payload,loading:!1});case"CARDS_REQUESTED":return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards,loading:!0,uniqIdLine:[],currentScore:0,maxScore:0});case"ITEM_ADD_TO_MEMORY":var r=t.payload,n=e.cards.find((function(e){return e.id===r}));console.log(n.id);var c=e.uniqIdLine.includes(n);return c?(console.log("Game Over",n),alert("GameOver: ".concat(n.text," was alredy")),Object(O.a)(Object(O.a)({},e),{},{uniqIdLine:[],currentScore:0})):(console.log("Game continue"),console.log("Current Score:",e.currentScore),Object(O.a)(Object(O.a)({},e),{},{uniqIdLine:[].concat(Object(m.a)(e.uniqIdLine),[n]),maxScore:e.cards.length,currentScore:e.currentScore+1}));default:return{state:e}}},C={cardsRequested:y,cardsLoaded:S},k=x()(Object(u.b)((function(e){return{cardsItems:e.cards,loading:e.loading}}),C)((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:e.img,alt:e.text,width:"100%"})}),Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("button",{onClick:function(){return e.changeCurrentScoreFunc()},className:"fab",children:"+"}),Object(d.jsx)("h3",{children:e.text})]})]})}))),E=r.p+"static/media/loading.f4fccc96.gif",I=function(){return Object(d.jsx)("img",{src:E,className:"spinner",alt:"Load...",style:{width:"100%",margin:"auto"}})},D=(r(28),function(e){Object(b.a)(r,e);var t=Object(f.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.props.cardsRequested(),this.props.GameService.getCardsItems().then((function(t){return e.props.cardsLoaded(t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.cardItems,c=r.loading;return console.log(this.props),c?(console.log("loading"),Object(d.jsx)(I,{})):(n&&(e=n.sort((function(){return Math.random()-.5})).map((function(e){return Object(d.jsx)(k,{img:e.img,text:e.text,onClick:function(){return console.log("Click")},changeCurrentScoreFunc:function(){return t.props.currentScoreChangeAC(e.id)}},e.id)}))),Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"cardList",children:Object(d.jsx)("div",{children:e})})}))}}]),r}(n.Component)),_={cardsRequested:y,cardsLoaded:S,currentScoreChangeAC:function(e){return{type:"ITEM_ADD_TO_MEMORY",payload:e}}},L=x()(Object(u.b)((function(e){return{cardItems:e.cards,loading:e.loading,currentScore:e.currentScore,uniqIdLine:e.uniqIdLine}}),_)(D));var A=function(e){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{currentScore:e.currentScore,bestScore:e.bestScore}),Object(d.jsx)(L,{}),Object(d.jsx)(j,{})]})},R=r(5),N=r.n(R),q=r(11),M=function(){function e(){Object(h.a)(this,e),this._apiBase="http://localhost:8000/characters"}return Object(p.a)(e,[{key:"getResource",value:function(){var e=Object(q.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch, received ".concat(t.status));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCardsItems",value:function(){var e=Object(q.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(q.a)(N.a.mark((function e(t){var r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource();case 2:return r=e.sent,n=r.find((function(e){return console.log("el.id: ".concat(e.id,", id: ").concat(t)),e.id===+t})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),G=r(3),T=r.p+"static/media/error.00660134.jpg",z=function(){var e;return Object(d.jsxs)("div",{style:(e={color:"white",fontSize:"20px",background:"url(".concat(T,") no-repeat center"),textAlign:"center"},Object(G.a)(e,"fontSize","4rem"),Object(G.a)(e,"minHeight","100%"),Object(G.a)(e,"width","100%"),Object(G.a)(e,"height","auto"),Object(G.a)(e,"position","fixed"),Object(G.a)(e,"top","0"),Object(G.a)(e,"left","0"),e),children:[Object(d.jsx)("div",{style:{padding:"50px",fontWeight:"bold"},children:"Error!"}),Object(d.jsx)("span",{style:{padding:"50px"},children:"Something go wrong. It's a big-big mistake"})]})},B=function(e){Object(b.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(p.a)(r,[{key:"componentDidCatch",value:function(){console.log(this.state),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)(z,{}):this.props.children}}]),r}(n.Component),F=r(16),J=Object(F.a)(w);window.store=J;var Q=J,U=(r(30),new M);o.a.render(Object(d.jsx)(u.a,{store:Q,children:Object(d.jsx)(B,{children:Object(d.jsx)(g.Provider,{value:U,children:Object(d.jsx)(A,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.94ca784e.chunk.js.map