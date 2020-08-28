(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/Avalon.50d89309.png"},22:function(e,a,t){e.exports=t.p+"static/media/calendar.8f3cea0e.png"},23:function(e,a,t){e.exports=t.p+"static/media/NBA.176d60b1.png"},24:function(e,a,t){e.exports=t.p+"static/media/SortingVisualizer.6a180024.png"},26:function(e,a,t){e.exports=t(36)},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),i=t.n(r);var c=function(){return l.a.createElement("header",{className:"sticky"},l.a.createElement("h1",{className:"masthead-heading"},"Hi, I'm Steven!"))},o=t(10),s=t(11),m=t(6),u=t(13),h=t(12),d=t(8),p=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={active:"about"},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(s.a)(t,[{key:"handleChange",value:function(e){var a=e.target.id;this.setState({active:a})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"NavBar"},l.a.createElement("ul",{className:"Nav"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/about",className:"about"===this.state.active?"active":null,onClick:this.handleChange,id:"about"}," About Me ")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/projects",className:"projects"===this.state.active?"active":null,onClick:this.handleChange,id:"projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/contact",className:"contact"===this.state.active?"active":null,onClick:this.handleChange,id:"contact"},"Contact Me"))))}}]),t}(l.a.Component),E=t(1);var g=function(){return l.a.createElement("h1",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Who Am I?"),l.a.createElement("p",null,"I am a Computer Science Specialist student at the University of Toronto."),l.a.createElement("p",null,"On top of my current compsci degree, I have already completed a Bachelor of Science degree in Biochemistry at the University of British Columbia."),l.a.createElement("br",null),l.a.createElement("h2",null,"Languages I am familiar with:"),l.a.createElement("ol",{className:"languages"},l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"C, C++"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS")),l.a.createElement("br",null),l.a.createElement("h2",null,"Web frameworks I am familiar with:"),l.a.createElement("ol",{className:"frameworks"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"django"))))},v=t(21),b=t.n(v);var f=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"Avalon"),l.a.createElement("br",null),l.a.createElement("img",{src:b.a,alt:"A picture of Avalon"}),l.a.createElement("p",null,"This is a deductive-reasoning based social role-playing party game. This app can be downloaded on an android device from Google Play. This game replies on certain players attemting to disrupt the larger group working together, while the rest of the players work to reveal the spy working against them."),l.a.createElement("a",{href:"https://github.com/StevenXu96/Avalon",target:"_blank",rel:"noopener noreferrer"},"View GitHub"))},y=t(22),N=t.n(y);var C=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"Calendar"),l.a.createElement("br",null),l.a.createElement("img",{src:N.a,alt:"A picture of a calendar"}),l.a.createElement("p",null,"A Java project intended to implement a calendar, with a variety of functions. This program allows users to keep track of any event in a more organized fashion, with a built in alert system to remind users of upcoming events. One cool feature is that this program also allows event sharing with other users."),l.a.createElement("a",{href:"https://github.com/StevenXu96/Calendar",target:"_blank",rel:"noopener noreferrer"},"View GitHub"))},k=t(23),w=t.n(k);var j=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"NBA Analytic Tool"),l.a.createElement("br",null),l.a.createElement("img",{src:w.a,alt:"A picture of the NBA tool"}),l.a.createElement("p",null,"A full-stack statictical analytic tool on NBA players, analyzing their strengths and weakness, updating in real-time. All you need to do is enter the players name in the search bar, then all results will be presented in tables and graphs, easy to understand."),l.a.createElement("a",{href:"http://nbaplayerdash.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"View Website"))},A=t(24),S=t.n(A);var x=function(){return l.a.createElement("div",{className:"individual-projects"},l.a.createElement("div",null,"Algorithm Visualization"),l.a.createElement("br",null),l.a.createElement("img",{src:S.a,alt:"A picture of the Visualizer"}),l.a.createElement("p",null,"An educational web application, aimed to present different types of sorting algorithms in animations. This web app features customizable array size and height, and animation speed, allowing a more interactive and exploratory learning experience."),l.a.createElement("a",{href:"https://stevenxu96.github.io/SortingAlgorithms/",target:"_blank",rel:"noopener noreferrer"},"View Website"))};var O=function(){return l.a.createElement("h1",null,l.a.createElement("div",{className:"Projects"},l.a.createElement(x,null),l.a.createElement(j,null),l.a.createElement(f,null),l.a.createElement(C,null)))},B=t(25),T=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.state={name:"",email:"",message:""},n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){alert("Email Sent!"),this.resetForm(),e.preventDefault()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"handleChange",value:function(e){var a=e.target,t=a.id,n=a.value;this.setState(Object(B.a)({},t,n))}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"30px 20px"}},l.a.createElement("form",{className:"contact-form",id:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",id:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message (max 150 characters)"),l.a.createElement("br",null),l.a.createElement("textarea",{className:"form-control",maxLength:"150",rows:"5",cols:"50",id:"message",value:this.state.message,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("button",{className:"contact-me-button",onClick:this.handleSubmit},"SUBMIT")))}}]),t}(l.a.Component);var I=function(){return l.a.createElement(d.a,null,l.a.createElement(c,null),l.a.createElement("div",{className:"main_grid"},l.a.createElement("div",{className:"item1"},l.a.createElement(p,null)),l.a.createElement("div",{className:"item2"},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/MyReactWebsite/",exact:!0,component:g}),l.a.createElement(E.a,{path:"/about",exact:!0,component:g}),l.a.createElement(E.a,{path:"/projects",exact:!0,component:O}),l.a.createElement(E.a,{path:"/contact",exact:!0,component:T})))))};i.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.abb3153d.chunk.js.map