(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Edward","image":"/assets/Ed.png"},{"id":2,"name":"Ein","image":"/assets/Ein.png"},{"id":3,"name":"Faye Valentine","image":"/assets/Faye.jpg"},{"id":4,"name":"Jet Black","image":"/assets/Jet.jpg"},{"id":5,"name":"Judy","image":"/assets/Judy.jpg"},{"id":6,"name":"Julia","image":"/assets/Julia.png"},{"id":7,"name":"Punch","image":"/assets/Punch.jpg"},{"id":8,"name":"Spike Spiegel","image":"/assets/Spike.jpg"},{"id":9,"name":"Vicious","image":"/assets/Vicious.png"}]')},,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(3),c=s.n(n),i=s(4),r=s(5),o=s(8),m=s(7),d=(s(13),s(0));var l=function(e){return Object(d.jsxs)("nav",{className:"navbar bg-dark sticky-top",children:[Object(d.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Clicky Game"}),Object(d.jsx)("span",{className:"message",children:e.message}),Object(d.jsxs)("span",{children:["Score: ",e.current," | Top Score: ",e.top]})]})};s(15);var u=function(){return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(d.jsx)("div",{className:"container containerText",children:Object(d.jsx)("h3",{children:"Test your memory skills! Click a portrait to begin"})})})};s(16);var g=function(e){return Object(d.jsx)("div",{className:"imgDiv",onClick:function(){return e.selected(e.id)},children:Object(d.jsx)("img",{src:"/Clicky"+e.image,alt:e.name})})},j=s(6),p=(s(17),function(e){Object(o.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={characters:j,selected:[],message:"Click a card to begin",score:0,topScore:0},e.shuffle=function(){var t=e.state.characters.sort((function(){return Math.random()-.5}));e.setState({characters:t})},e.selected=function(t){e.shuffle(),-1!==e.state.selected.indexOf(t)?e.setState({score:0,selected:[],message:"You're gonna carry that weight..."}):(e.state.selected.push(t),e.setState({score:e.state.score+1,message:"Bang! Keep going"})),e.state.score>=e.state.topScore&&e.setState({topScore:e.state.topScore+1})},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.shuffle()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(l,{top:this.state.topScore,current:this.state.score,message:this.state.message}),Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"container",children:this.state.characters.map((function(t){return Object(d.jsx)(g,{charName:t.name,image:t.image,selected:e.selected,id:t.id},t.id)}))})]})}}]),s}(a.Component));c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.090e3f20.chunk.js.map