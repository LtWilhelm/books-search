(window.webpackJsonpmern=window.webpackJsonpmern||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),i=(a(37),a(4)),s=a(5),l=a(7),u=a(6),m=a(8),h=a(29),p=a(11),d=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement("ul",{className:"nav navbar-dark"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link "+("/search"===this.props.location?"active":""),href:"/search"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link "+("/saved"===this.props.location?"active":""),href:"/saved"},"Saved"))))}}]),t}(n.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-3"},"Google Books Search"),o.a.createElement("p",{className:"lead"},"Search Google Books for your favorite titles to add them to your reading list"),o.a.createElement("hr",{className:"my-2"}),o.a.createElement("p",null,"To get started, simply use the search bar below!")))}}]),t}(n.Component),v=a(14),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card col-4"},o.a.createElement("img",{className:"card-img-top",src:this.props.image,alt:"book cover"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},this.props.title),o.a.createElement("h5",{className:"card-title"},"By: ",this.props.author||"No author listed"),o.a.createElement("p",{className:"card-text"},this.props.description),o.a.createElement("a",{className:"btn btn-secondary",target:"_blank",rel:"noopener noreferrer",href:this.props.link},"View Book"),"/search"===document.location.pathname&&o.a.createElement("button",{className:"btn btn-primary ml-1",onClick:function(){return e.props.click({image:e.props.image,title:e.props.title,author:e.props.author,synopsis:e.props.description})}},"Save Book")))}}]),t}(n.Component),g=a(39),k={searchBook:function(e){return e=e.trim().replace(/\s/g,"+"),g.get("https://www.googleapis.com/books/v1/volumes?q="+e)},saveBook:function(e){return g.post("/api/addbook",e)},getSaved:function(){return g.get("/api/books")}},E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],search:""},a.search=function(){k.searchBook(a.state.search).then((function(e){console.log(e.data.items),a.setState({books:e.data.items})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(v.a)({},n,o))},a.handleSearch=function(e){e.preventDefault(),a.search()},a.save=function(e){k.saveBook(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log("saved?")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("form",null,o.a.createElement("input",{onChange:this.handleInputChange,className:"form-control",name:"search",type:"text",value:this.state.search,style:{marginBottom:".3em"}}),o.a.createElement("button",{onClick:this.handleSearch,className:"btn btn-primary",style:{marginBottom:"1em"}},"Search"))),o.a.createElement("div",{className:"row"},this.state.books&&this.state.books.map((function(t){return o.a.createElement(b,{key:t.id,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:null,title:t.volumeInfo.title,description:t.volumeInfo.description,author:t.volumeInfo.authors&&t.volumeInfo.authors.join(", "),link:t.volumeInfo.infoLink,click:e.save})}))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],search:""},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(v.a)({},n,o))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getSaved().then((function(t){console.log(t),e.setState({books:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row",style:{marginBottom:"1em"}},o.a.createElement("form",null,o.a.createElement("input",{onChange:this.handleInputChange,className:"form-control",name:"search",type:"text",value:this.state.search}))),o.a.createElement("div",{className:"row"},this.state.books&&(this.state.search?this.state.books.filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.state.search)})).map((function(e){return o.a.createElement(b,{key:e._id,image:e.image,title:e.title,description:e.description,author:e.author.join(", "),link:e.infoLink})})):this.state.books.map((function(e){return o.a.createElement(b,{key:e._id,image:e.image,title:e.title,description:e.description,author:e.authors&&e.authors.join(", "),link:e.infoLink})})))))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(d,{location:document.location.pathname}),o.a.createElement(f,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/search",component:E}),o.a.createElement(p.a,{path:"/saved",component:j})))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.135d157d.chunk.js.map