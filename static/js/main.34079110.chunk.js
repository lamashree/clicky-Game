(this.webpackJsonpclickygameapp=this.webpackJsonpclickygameapp||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://st3.depositphotos.com/7843760/13009/v/950/depositphotos_130095740-stock-illustration-cute-bee-cartoon-flying-of.jpg","clicked":false},{"id":2,"image":"https://lh3.googleusercontent.com/proxy/zcdw8EMNi3XjXrnbbbz7kchjOefjeppLu9gmw5FLxeg6UXO5eaSfW-SVVE4pN9RUbXKphUbvgO8ozVekVF0VoQnC","clicked":false},{"id":3,"image":"https://lh6.googleusercontent.com/proxy/HzsjytrKNhlCwxMJdm3-Q9FObTUwu5mW1LZkVvqw5aV6ttc6c3f9PewqGaN1m_AhyCwyx4k9H6GWp-i9Nl36oa5R","clicked":false},{"id":4,"image":"https://lh4.googleusercontent.com/proxy/tl2i9mWY9DTLCHe_UdLCqUpTX3U6f55SuEyAdbKeAT3qhl1fOQY49qh8dxt-era5i5oVn3misq359JxrC1dUjWxCYIpz6X-OGp8qQfc","clicked":false},{"id":5,"image":"https://i.ya-webdesign.com/images/short-clipart-mickey-mouse-5.jpg","clicked":false},{"id":6,"image":"https://vignette.wikia.nocookie.net/corduroy-nelvana/images/2/23/JerryCNArt.png/revision/latest/scale-to-width-down/340?cb=20140809014034","clicked":false},{"id":7,"image":"https://media.milesdefiestas.com/galeria/articulos/figuras-mickey-mouse_14687_1.jpg","clicked":false},{"id":8,"image":"https://w0.pngwave.com/png/826/204/jerry-mouse-tom-cat-mickey-mouse-nibbles-mouse-png-clip-art.png","clicked":false},{"id":9,"image":"https://cdn.imgbin.com/6/6/15/imgbin-jerry-mouse-tom-cat-sticker-tom-and-jerry-decal-tom-and-jerry-jerry-the-mouse-beCizYbns2cHw7UCtjptSjzUw.jpg","clicked":false},{"id":10,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7QPyUcZJSBLny0D5k8SAZ_CD7sK80rNyvk0-1Fx2WW_rnsL2&s","clicked":false},{"id":11,"image":"https://images-na.ssl-images-amazon.com/images/I/41r71SF1R2L.jpg","clicked":false},{"id":12,"image":"https://mguzzoelevencollege.files.wordpress.com/2013/03/tweety-bird-laughing.jpg?w=450","clicked":false}]')},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(8),r=a.n(s),i=a(6),o=a(1),l=a(2),m=a(4),g=a(3),u=a(5),d=(a(15),a(16),function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You have selected right one!";case"incorrect":return"Bad selection! please try again";default:return"Click an image to begin!"}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,c=e.topScore,n={animating:!0};n.message=0===a&&0===c?"":0===a&&c>0?"incorrect":"correct",a===this.props.score&&this.state.message===n.message||this.setState(n)}},{key:"render",value:function(){var e=this;return n.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(c.Component)),p=function(e){return n.a.createElement("div",{className:"navbar"},n.a.createElement("a",{href:"/"},"Click Game"),n.a.createElement(d,{score:e.score,topScore:e.topScore}),n.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore),n.a.createElement("div",{className:e.navMsgColor}))},h=(a(17),function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{class:"icon",alt:"icon",src:e.image,onClick:function(){return e.handleClick(e.id)}})))});a(18);var f=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},k=a(9),y=(a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={Images:k,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,c=t.topScore,n=t.score+1,s=Math.max(n,c);a.setState({Images:a.shuffleArray(e),score:n,topScore:s})},a.handleIncorrectGuess=function(e){a.setState({Images:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map((function(e){return Object(i.a)({},e,{clicked:!1})}));return a.shuffleArray(t)},a.shuffleArray=function(e){var t,a,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),a=e[c],e[c]=e[t],e[t]=a;return e},a.handleClick=function(e){var t=!1,c=a.state.Images.map((function(a){var c=Object(i.a)({},a);return c.id===e&&(c.clicked||(c.clicked=!0,t=!0)),c}));t?a.handleCorrectGuess(c):a.handleIncorrectGuess(c)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({Images:this.shuffleArray(this.state.Images)})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{score:this.state.score,navMessage:this.state.navMessage,topScore:this.state.topScore}),this.renderMessage,n.a.createElement("div",{class:" info-container"},n.a.createElement("div",{class:"Row"},n.a.createElement("div",{class:"col sm6"},n.a.createElement("h1",null,"Begin Clicky Game by clicking any image"),n.a.createElement("span",null,n.a.createElement("h1",null,"To earn points don't click same image again!!"))))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col md8"},n.a.createElement(f,null,this.state.Images.map((function(t){return n.a.createElement(h,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleClick,image:t.image})}))))))}}]),t}(c.Component));r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.34079110.chunk.js.map