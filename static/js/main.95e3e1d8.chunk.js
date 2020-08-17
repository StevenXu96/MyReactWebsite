(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/Avalon.50d89309.png"},22:function(e,a,t){e.exports=t.p+"static/media/calendar.8f3cea0e.png"},24:function(e,a,t){e.exports=t(34)},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r);var i=function(){return l.a.createElement("header",{className:"sticky"},l.a.createElement("p",{className:"masthead-intro"},"Hi I'm"),l.a.createElement("h1",{className:"masthead-heading"},"Steven!"))},m=t(10),o=t(11),s=t(6),u=t(13),h=t(12),d=t(8),p=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={active:"about"},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){var a=e.target.id;this.setState({active:a})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"NavBar"},l.a.createElement("ul",{className:"Nav"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about",className:"about"===this.state.active?"active":null,onClick:this.handleChange,id:"about"}," About Me ")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/projects",className:"projects"===this.state.active?"active":null,onClick:this.handleChange,id:"projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/contact",className:"contact"===this.state.active?"active":null,onClick:this.handleChange,id:"contact"},"Contact Me"))))}}]),t}(l.a.Component),E=t(1);var v=function(){return l.a.createElement("h1",{style:{marginLeft:"25%",padding:"1px 20px"}},l.a.createElement("div",null,l.a.createElement("h2",null,"Who Am I?"),l.a.createElement("p",null,"My name is Steven Xu. I am a Computer Science student at the University of Toronto."),l.a.createElement("p",null,"I also already completed a Bachelor of Science degree in Biochemistry at the University of British Columbia."),l.a.createElement("br",null),l.a.createElement("h2",null,"Languages I am familiar with:"),l.a.createElement("ol",{className:"languages"},l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"C, C++"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS")),l.a.createElement("br",null),l.a.createElement("h2",null,"Web frameworks I am familiar with:"),l.a.createElement("ol",{className:"frameworks"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"django"))))},g=t(21),b=t.n(g);var f=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"Avalon"),l.a.createElement("br",null),l.a.createElement("img",{src:b.a,alt:"A picture of Avalon"}),l.a.createElement("p",null,"This is a deductive-reasoning based social role-playing party game. This app can be downloaded on an android device from Google Play. This game replies on certain players attemting to disrupt the larger group working together, while the rest of the players work to reveal the spy working against them."),l.a.createElement("a",{href:"https://github.com/StevenXu96/Avalon",target:"_blank",rel:"noopener noreferrer"},"View GitHub"))},y=t(22),C=t.n(y);var N=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"Calendar"),l.a.createElement("br",null),l.a.createElement("img",{src:C.a,alt:"A picture of a calendar"}),l.a.createElement("p",null,"A Java project intended to implement a calendar, with a variety of functions. This program allows users to keep track of any event in a more organized fashion, with a built in alert system to remind users of upcoming events. One cool feature is that this program also allows event sharing with other users."),l.a.createElement("a",{href:"https://github.com/StevenXu96/Calendar",target:"_blank",rel:"noopener noreferrer"},"View GitHub"))};var j=function(){return l.a.createElement("h1",{style:{marginLeft:"25%",padding:"1px 20px"}},l.a.createElement("div",{className:"Projects"},l.a.createElement(f,null),l.a.createElement(N,null)))},k=t(23),w=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.state={name:"",email:"",message:""},n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){alert("Email Sent!"),this.resetForm(),e.preventDefault()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"handleChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.setState(Object(k.a)({},t,n))}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginLeft:"25%",padding:"30px 20px"}},l.a.createElement("form",{className:"contact-form",id:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",id:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message (max 150 characters)"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"form-control",maxLength:"150",rows:"5",cols:"50",id:"message",value:this.state.message,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("button",{className:"contact-me-button",onClick:this.handleSubmit},"SUBMIT")))}}]),t}(l.a.Component);var S=function(){return l.a.createElement(d.a,null,l.a.createElement(i,null),l.a.createElement(p,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/MyReactWebsite/",exact:!0,component:v}),l.a.createElement(E.a,{path:"/about",exact:!0,component:v}),l.a.createElement(E.a,{path:"/projects",exact:!0,component:j}),l.a.createElement(E.a,{path:"/contact",exact:!0,component:w})))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.95e3e1d8.chunk.js.map