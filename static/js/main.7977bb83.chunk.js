(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/trash.4c03e09e.svg"},32:function(e,a,t){e.exports=t.p+"static/media/error404.fea006c3.png"},33:function(e,a,t){e.exports=t.p+"static/media/password.6be9ca3b.png"},34:function(e,a,t){e.exports=t.p+"static/media/homepage.0bae4bc0.png"},37:function(e,a,t){e.exports=t(66)},46:function(e,a,t){},48:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t.n(r),s=t(30),l=t.n(s),i=(t(46),t(8)),o=t(9),u=t(11),c=t(7),d=t(10),m=(t(48),t(35)),h=t(20),p=t(36),w=(t(50),t(52),t(28)),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"headerMain"},n.a.createElement(w.a,{style:{fontSize:"100px"}}),n.a.createElement("h1",null," Grafik Pracowniczy")))},g=(t(54),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"footerMain"},n.a.createElement("span",null,"Copyright \xa9 2023 Adrian Dworak")))}),E=(t(56),t(12)),k=t(19),v=t(31),b=t(25),f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={input_password:""},t.handleInputPasswordValue=function(e){t.setState({input_password:e.target.value})},t.clearInputPasswordValue=function(){t.props.checkPasswordAdmin(t.state.input_password),t.setState({input_password:""})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"navbarMain"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(E.b,{to:"/",className:function(e){return e.isActive?"active":"inactive"}},n.a.createElement(b.a,{className:"iconNav"}),"Strona G\u0142\xf3wna")),n.a.createElement("li",null,n.a.createElement(E.b,{to:"scheduleUK",className:function(e){return e.isActive?"active":"inactive"}},n.a.createElement(k.a,{className:"iconNav"}),"Grafik Ukraina")),n.a.createElement("li",null,n.a.createElement(E.b,{to:"schedulePL",className:function(e){return e.isActive?"active":"inactive"}},n.a.createElement(k.a,{className:"iconNav"}),"Grafik Polska")),n.a.createElement("li",null,n.a.createElement(E.b,{to:"adminPanel",className:function(e){return e.isActive?"active":"inactive"}},n.a.createElement(v.a,{className:"iconNav"}),"Admin Panel")))),n.a.createElement("div",{className:"navbarAdmin"},this.props.adminStatus?n.a.createElement("h5",null,"Zalogowany jako Administrator"):n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"password",placeholder:"Podaj has\u0142o",value:this.state.input_password,onChange:this.handleInputPasswordValue})," ",this.props.incorrectPassword&&n.a.createElement("span",{style:{color:"white",fontSize:"14px",fontWeight:"500"}},"Niepoprawne has\u0142o!!!")),n.a.createElement("button",{className:"adminButton",onClick:this.clearInputPasswordValue},this.props.adminStatus?"Wyloguj Administratora":"Zaloguj Administratora"))))}}]),a}(n.a.Component),N=t(0),P=t(6),_=t(26),S=t.n(_),O=(t(21),[{day:1,hours:"6-18"},{day:2,hours:"6-18"},{day:3,hours:"6-18"},{day:4,hours:"6-18"},{day:5,hours:"x"},{day:6,hours:"x"},{day:7,hours:"18-6"},{day:8,hours:"18-6"},{day:9,hours:"18-6"},{day:10,hours:"18-6"},{day:11,hours:"6-18"},{day:12,hours:"6-18"},{day:13,hours:"6-18"},{day:14,hours:"6-18"},{day:15,hours:"x"},{day:16,hours:"x"},{day:17,hours:"18-6"},{day:18,hours:"18-6"},{day:19,hours:"18-6"},{day:20,hours:"18-6"},{day:21,hours:"6-18"},{day:22,hours:"6-18"},{day:23,hours:"6-18"},{day:24,hours:"6-18"},{day:25,hours:"x"},{day:26,hours:"x"},{day:27,hours:"18-6"},{day:28,hours:"18-6"},{day:29,hours:"18-6"},{day:30,hours:"18-6"}]),z=[{day:1,hours:"x"},{day:2,hours:"x"},{day:3,hours:"18-6"},{day:4,hours:"18-6"},{day:5,hours:"18-6"},{day:6,hours:"18-6"},{day:7,hours:"x"},{day:8,hours:"x"},{day:9,hours:"6-18"},{day:10,hours:"6-18"},{day:11,hours:"6-18"},{day:12,hours:"6-18"},{day:13,hours:"x"},{day:14,hours:"x"},{day:15,hours:"18-6"},{day:16,hours:"18-6"},{day:17,hours:"18-6"},{day:18,hours:"18-6"},{day:19,hours:"x"},{day:20,hours:"x"},{day:21,hours:"6-18"},{day:22,hours:"6-18"},{day:23,hours:"6-18"},{day:24,hours:"6-18"},{day:25,hours:"x"},{day:26,hours:"x"},{day:27,hours:"18-6"},{day:28,hours:"18-6"},{day:29,hours:"18-6"},{day:30,hours:"18-6"}],x=function(e){var a=O.map(function(e){return n.a.createElement("td",{key:e.day},e.hours)}),t=z.map(function(e){return n.a.createElement("td",{key:e.day},e.hours)});return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,e.adminStatus?n.a.createElement("td",{style:{backgroundColor:"white"}},n.a.createElement("img",{className:"trashIcon",onClick:function(){return e.delete(e.id)},src:S.a})):null,n.a.createElement("td",null,e.rcp),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.surname),n.a.createElement("td",null,e.status),1==e.brigade?a:null,2==e.brigade?t:null))},j=t(27),C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={workers:[{id:1,rcp:"0001",name:"Kolzina",surname:"Bondarenko",status:"Liderka",brigade:1},{id:2,rcp:"0002",name:"Victoria",surname:"Lysenko ",status:"Operatorka",brigade:2},{id:3,rcp:"0003",name:"Natasha",surname:"Kravchuk",status:"Operatorka",brigade:2},{id:4,rcp:"0004",name:"Viktoriia",surname:"Veselska",status:"Operatorka",brigade:1},{id:5,rcp:"0005",name:"Anastasiia",surname:"Makushynska",status:"Operatorka",brigade:1},{id:6,rcp:"0006",name:"Nataliia",surname:"Vitman",status:"Operatorka",brigade:1},{id:7,rcp:"0007",name:"Yelyzaveta",surname:"Kolzina",status:"Operatorka",brigade:2},{id:8,rcp:"0008",name:"Christina",surname:"Pavlova",status:"Operatorka",brigade:1},{id:9,rcp:"0009",name:"Natasha",surname:"Kravchuk",status:"Operatorka",brigade:2},{id:10,rcp:"0010",name:"Liliia",surname:"Polozun",status:"Operatorka",brigade:2},{id:11,rcp:"0011",name:"Alona",surname:"Chorna",status:"Operatorka",brigade:1},{id:12,rcp:"0012",name:"Natasha",surname:"Kravchuk",status:"Operatorka",brigade:1},{id:13,rcp:"0013",name:"Natasha",surname:"Pakholiuk",status:"Operatorka",brigade:2},{id:14,rcp:"0014",name:"Kolisnyk",surname:"Kravchuk",status:"Operatorka",brigade:1},{id:15,rcp:"0015",name:"Natalia",surname:"Kravchuk",status:"Operatorka",brigade:1},{id:16,rcp:"0016",name:"Dariia",surname:"Pashchenko",status:"Operatorka",brigade:2},{id:17,rcp:"0017",name:"Tetiana",surname:"Sydorova",status:"Operatorka",brigade:2},{id:18,rcp:"0018",name:"Alina",surname:"Leliukh",status:"Operatorka",brigade:2},{id:19,rcp:"0019",name:"Liubov",surname:"Melnyk",status:"Operatorka",brigade:1},{id:20,rcp:"0020",name:"Yuliia",surname:"Zlobina",status:"Operatorka",brigade:1}],new_rcp:"",new_name:"",new_surname:"",new_status:"Liderka",new_brigade:0,errors:{name:!1,username:!1,rcp:!1,status:!1,brigade:!1}},t.messages={name_incorect:"Imi\u0119 musi sk\u0142ada\u0107 si\u0119 minimum z 4 liter.",surname_incorrect:"Nazwisko musi sk\u0142ada\u0107 si\u0119 minimum z 4 liter.",rcp_incorrect:"B\u0142\u0119dny RCP, musi mie\u0107 r\xf3wno 4 znaki.",status_incorrect:"Wybierz stanowisko pracownika.",brigade_incorrect:"Wybierz zmian\u0119 godzinow\u0105 pracownika."},t.handleAddWorker=function(){var e=t.formValidation();if(console.log(e),e.correct){var a={id:t.state.workers.length+1,rcp:t.state.new_rcp,name:t.state.new_name,surname:t.state.new_surname,status:t.state.new_status,brigade:t.state.new_brigade};t.setState({workers:[].concat(Object(P.a)(t.state.workers),[a]),new_rcp:"",new_name:"",new_surname:"",new_status:"Liderka",new_brigade:0,errors:{name:!1,surname:!1,rcp:!1,status:!1,brigade:!1}})}else t.setState({errors:{name:!e.name,surname:!e.surname,rcp:!e.rcp,status:!e.status,brigade:!e.brigade}})},t.handleNewName=function(e){t.setState({new_name:e.target.value})},t.handleNewSurname=function(e){t.setState({new_surname:e.target.value})},t.handleNewRCP=function(e){t.setState({new_rcp:e.target.value})},t.handleNewStatus=function(e){t.setState({new_status:e.target.value})},t.handleNewBrigade=function(e){t.setState({new_brigade:e.target.value})},t.deleteTask=function(e){var a=Object(P.a)(t.state.workers),r=a.findIndex(function(a){return a.id===e});a.splice(r,1),t.setState({workers:a})},t.formValidation=function(){var e=!1,a=!1,r=!1,n=!1,s=!1,l=!1;return t.state.new_name.length>4&&-1===t.state.new_name.indexOf(" ")&&/^[a-zA-Z]+$/.test(t.state.new_name)&&(e=!0),t.state.new_surname.length>4&&-1===t.state.new_surname.indexOf(" ")&&/^[a-zA-Z]+$/.test(t.state.new_surname)&&(a=!0),4==t.state.new_rcp.length&&(r=!0),"Liderka"!==t.state.new_status&&"Operatorka"!==t.state.new_status||(n=!0),"1"!==t.state.new_brigade&&"2"!==t.state.new_brigade||(s=!0),e&&a&&r&&n&&s&&(l=!0),{correct:l,name:e,surname:a,rcp:r,status:n,brigade:s}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){for(var e=this,a=this.state.workers.map(function(a){return n.a.createElement(x,Object.assign({key:a.id,adminStatus:e.props.adminStatus},a,{delete:e.deleteTask}))}),t=[],r=1;r<=30;r++)t.push(n.a.createElement("th",{key:r},r));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"scheduleUkMain"},this.props.adminStatus?n.a.createElement("div",{className:"adminPanel"},n.a.createElement("div",null,n.a.createElement("h3",null,"Podsumowanie Ukraina"),n.a.createElement("div",{className:"UkWorkers"},n.a.createElement("div",{className:"UkStat WorkerStat"},n.a.createElement("h3",null,"Wszystkich"),n.a.createElement("p",null,this.state.workers.length)),n.a.createElement("div",{className:"UkStat WorkerStat"},n.a.createElement("h3",null,"I Zmiana"),n.a.createElement("p",null,this.state.workers.filter(function(e){return 1===e.brigade}).length)),n.a.createElement("div",{className:"UkStat WorkerStat"},n.a.createElement("h3",null,"II Zmiana"),n.a.createElement("p",null,this.state.workers.filter(function(e){return 2===e.brigade}).length)))),n.a.createElement("div",{className:"formMain"},n.a.createElement("h2",null,"Dodaj nowego pracownika"),n.a.createElement("div",{className:"inputRow1"},n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"text",placeholder:"Podaj imi\u0119",value:this.state.new_name,onChange:this.handleNewName})," ",this.state.errors.name&&n.a.createElement("span",null,this.messages.name_incorect)),n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"text",placeholder:"Podaj nazwisko",value:this.state.new_surname,onChange:this.handleNewSurname})," ",this.state.errors.surname&&n.a.createElement("span",null,this.messages.surname_incorrect))),n.a.createElement("div",{className:"inputRow2"},n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"number",name:"",id:"",placeholder:"Numer RCP",value:this.state.new_rcp,onChange:this.handleNewRCP}),this.state.errors.rcp&&n.a.createElement("span",null,this.messages.rcp_incorrect)),n.a.createElement("div",{className:"validation"},n.a.createElement("select",{value:this.state.new_status,onChange:this.handleNewStatus},n.a.createElement("option",{value:"Liderka"},"Liderka"),n.a.createElement("option",{value:"Operatorka"},"Operatorka")),this.state.errors.status&&n.a.createElement("span",null,this.messages.status_incorrect))),n.a.createElement("div",{className:"validation"},n.a.createElement("label",{onChange:this.handleNewBrigade},n.a.createElement("input",{type:"radio",value:1,name:"brigade"})," Zmiana I ",n.a.createElement("input",{style:{marginLeft:"10px"},type:"radio",value:2,name:"brigade"})," Zmiana II "),this.state.errors.brigade&&n.a.createElement("span",null,this.messages.brigade_incorrect)),n.a.createElement("button",{className:"addWorkerButton",onClick:this.handleAddWorker},"Dodaj pracownika"))):null,n.a.createElement(j.a,{striped:!0,responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,this.props.adminStatus?n.a.createElement("th",null):null,n.a.createElement("th",null,"RCP"),n.a.createElement("th",null,"Imi\u0119"),n.a.createElement("th",null,"Nazwisko"),n.a.createElement("th",null,"Stanowisko"),t)),n.a.createElement("tbody",null,a))))}}]),a}(n.a.Component),A=[{day:1,hours:"6-14"},{day:2,hours:"6-14"},{day:3,hours:"6-14"},{day:4,hours:"6-14"},{day:5,hours:"6-14"},{day:6,hours:"x"},{day:7,hours:"x"},{day:8,hours:"14-22"},{day:9,hours:"14-22"},{day:10,hours:"14-22"},{day:11,hours:"14-22"},{day:12,hours:"14-22"},{day:13,hours:"x"},{day:14,hours:"x"},{day:15,hours:"22-6"},{day:16,hours:"22-6"},{day:17,hours:"22-6"},{day:18,hours:"22-6"},{day:19,hours:"22-6"},{day:20,hours:"x"},{day:21,hours:"x"},{day:22,hours:"6-14"},{day:23,hours:"6-14"},{day:24,hours:"6-14"},{day:25,hours:"6-14"},{day:26,hours:"6-14"},{day:27,hours:"x"},{day:28,hours:"x"},{day:29,hours:"14-22"},{day:30,hours:"14-22"}],I=[{day:1,hours:"14-6"},{day:2,hours:"14-6"},{day:3,hours:"14-6"},{day:4,hours:"14-6"},{day:5,hours:"6-16"},{day:6,hours:"x"},{day:7,hours:"x"},{day:8,hours:"22-6"},{day:9,hours:"22-6"},{day:10,hours:"22-6"},{day:11,hours:"22-6"},{day:12,hours:"22-6"},{day:13,hours:"x"},{day:14,hours:"x"},{day:15,hours:"6-14"},{day:16,hours:"6-14"},{day:17,hours:"6-14"},{day:18,hours:"6-14"},{day:19,hours:"6-14"},{day:20,hours:"x"},{day:21,hours:"x"},{day:22,hours:"14-6"},{day:23,hours:"14-6"},{day:24,hours:"14-6"},{day:25,hours:"14-6"},{day:26,hours:"14-6"},{day:27,hours:"x"},{day:28,hours:"x"},{day:29,hours:"22-6"},{day:30,hours:"22-6"}],R=[{day:1,hours:"22-6"},{day:2,hours:"22-6"},{day:3,hours:"22-6"},{day:4,hours:"22-6"},{day:5,hours:"22-6"},{day:6,hours:"x"},{day:7,hours:"x"},{day:8,hours:"6-14"},{day:9,hours:"6-14"},{day:10,hours:"6-14"},{day:11,hours:"6-14"},{day:12,hours:"6-14"},{day:13,hours:"x"},{day:14,hours:"x"},{day:15,hours:"14-22"},{day:16,hours:"14-22"},{day:17,hours:"14-22"},{day:18,hours:"14-22"},{day:19,hours:"14-22"},{day:20,hours:"x"},{day:21,hours:"x"},{day:22,hours:"22-6"},{day:23,hours:"22-6"},{day:24,hours:"22-6"},{day:25,hours:"22-6"},{day:26,hours:"22-6"},{day:27,hours:"x"},{day:28,hours:"x"},{day:29,hours:"6-14"},{day:30,hours:"6-14"}],W=function(e){var a=A.map(function(e){return n.a.createElement("td",{key:e.day},e.hours)}),t=I.map(function(e){return n.a.createElement("td",{key:e.day},e.hours)}),r=R.map(function(e){return n.a.createElement("td",{key:e.day},e.hours)});return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,e.adminStatus?n.a.createElement("td",{style:{backgroundColor:"white"}},n.a.createElement("img",{className:"trashIcon",onClick:function(){return e.delete(e.id)},src:S.a})):null,n.a.createElement("td",null,e.rcp),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.surname),n.a.createElement("td",null,e.status),1==e.brigade?a:null,2==e.brigade?t:null,3==e.brigade?r:null))},L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={workers:[{id:1,rcp:"0001",name:"Monika",surname:"W\u0119glarz",status:"Liderka",brigade:2},{id:2,rcp:"0002",name:"Milena",surname:"\u017byszkowska ",status:"Liderka",brigade:1},{id:3,rcp:"0003",name:"Ola",surname:"Kot",status:"Operatorka",brigade:3},{id:4,rcp:"0004",name:"Adrianna",surname:"Nosol",status:"Operatorka",brigade:1},{id:5,rcp:"0005",name:"Aneta",surname:"Dworak",status:"Operatorka",brigade:2},{id:6,rcp:"0006",name:"Klaudia",surname:"St\u0119pie\u0144",status:"Operatorka",brigade:1},{id:7,rcp:"0007",name:"Maria",surname:"Kowalska",status:"Operatorka",brigade:3},{id:8,rcp:"0008",name:"Paulina",surname:"Sulej",status:"Operatorka",brigade:2},{id:9,rcp:"0009",name:"Wiktoria",surname:"Kurek",status:"Operatorka",brigade:3},{id:10,rcp:"0010",name:"Blanka",surname:"Kot",status:"Operatorka",brigade:1},{id:11,rcp:"0011",name:"Nikol",surname:"D\u0105browska",status:"Operatorka",brigade:2},{id:12,rcp:"0012",name:"Justyna",surname:"Wi\u015bniewska",status:"Operatorka",brigade:1},{id:13,rcp:"0013",name:"Katarzyna",surname:"Wi\u015bnia",status:"Operatorka",brigade:3},{id:14,rcp:"0014",name:"Sylwia",surname:"Poborska",status:"Operatorka",brigade:3}],new_rcp:"",new_name:"",new_surname:"",new_status:"Liderka",new_brigade:0,errors:{name:!1,username:!1,rcp:!1,status:!1,brigade:!1}},t.messages={name_incorect:"Imi\u0119 musi sk\u0142ada\u0107 si\u0119 minimum z 4 liter.",surname_incorrect:"Nazwisko musi sk\u0142ada\u0107 si\u0119 minimum z 4 liter.",rcp_incorrect:"B\u0142\u0119dny RCP, musi mie\u0107 r\xf3wno 4 znaki.",status_incorrect:"Wybierz stanowisko pracownika.",brigade_incorrect:"Wybierz zmian\u0119 godzinow\u0105 pracownika."},t.handleAddWorker=function(){var e=t.formValidation();if(console.log(e),e.correct){var a={id:t.state.workers.length+1,rcp:t.state.new_rcp,name:t.state.new_name,surname:t.state.new_surname,status:t.state.new_status,brigade:t.state.new_brigade};t.setState({workers:[].concat(Object(P.a)(t.state.workers),[a]),new_rcp:"",new_name:"",new_surname:"",new_status:"Liderka",new_brigade:0,errors:{name:!1,surname:!1,rcp:!1,status:!1,brigade:!1}})}else t.setState({errors:{name:!e.name,surname:!e.surname,rcp:!e.rcp,status:!e.status,brigade:!e.brigade}})},t.handleNewName=function(e){t.setState({new_name:e.target.value})},t.handleNewSurname=function(e){t.setState({new_surname:e.target.value})},t.handleNewRCP=function(e){t.setState({new_rcp:e.target.value})},t.handleNewStatus=function(e){t.setState({new_status:e.target.value})},t.handleNewBrigade=function(e){t.setState({new_brigade:e.target.value})},t.deleteTask=function(e){var a=Object(P.a)(t.state.workers),r=a.findIndex(function(a){return a.id===e});a.splice(r,1),t.setState({workers:a})},t.formValidation=function(){var e=!1,a=!1,r=!1,n=!1,s=!1,l=!1;return t.state.new_name.length>4&&-1===t.state.new_name.indexOf(" ")&&/^[a-zA-Z]+$/.test(t.state.new_name)&&(e=!0),t.state.new_surname.length>4&&-1===t.state.new_surname.indexOf(" ")&&/^[a-zA-Z]+$/.test(t.state.new_surname)&&(a=!0),4==t.state.new_rcp.length&&(r=!0),"Liderka"!==t.state.new_status&&"Operatorka"!==t.state.new_status||(n=!0),"1"!==t.state.new_brigade&&"2"!==t.state.new_brigade&&"3"!==t.state.new_brigade||(s=!0),e&&a&&r&&n&&s&&(l=!0),{correct:l,name:e,surname:a,rcp:r,status:n,brigade:s}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){for(var e=this,a=this.state.workers.map(function(a){return n.a.createElement(W,Object.assign({key:a.id,adminStatus:e.props.adminStatus},a,{delete:e.deleteTask}))}),t=[],r=1;r<=30;r++)t.push(n.a.createElement("th",{key:r},r));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"scheduleUkMain"},this.props.adminStatus?n.a.createElement("div",{className:"adminPanel"},n.a.createElement("div",null,n.a.createElement("h3",null,"Podsumowanie Polska"),n.a.createElement("div",{className:"PlWorkers"},n.a.createElement("div",{className:"PlStat WorkerStat"},n.a.createElement("h3",null,"Wszystkich"),n.a.createElement("p",null,this.state.workers.length)),n.a.createElement("div",{className:"PlStat WorkerStat"},n.a.createElement("h3",null,"I Zmiana"),n.a.createElement("p",null,this.state.workers.filter(function(e){return 1==e.brigade}).length)),n.a.createElement("div",{className:"PlStat WorkerStat"},n.a.createElement("h3",null,"II Zmiana"),n.a.createElement("p",null,this.state.workers.filter(function(e){return 2==e.brigade}).length)),n.a.createElement("div",{className:"PlStat WorkerStat"},n.a.createElement("h3",null,"III Zmiana"),n.a.createElement("p",null,this.state.workers.filter(function(e){return 3==e.brigade}).length)))),n.a.createElement("div",{className:"formMain"},n.a.createElement("h2",null,"Dodaj nowego pracownika"),n.a.createElement("div",{className:"inputRow1"},n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"text",placeholder:"Podaj imi\u0119",value:this.state.new_name,onChange:this.handleNewName})," ",this.state.errors.name&&n.a.createElement("span",null,this.messages.name_incorect)),n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"text",placeholder:"Podaj nazwisko",value:this.state.new_surname,onChange:this.handleNewSurname})," ",this.state.errors.surname&&n.a.createElement("span",null,this.messages.surname_incorrect))),n.a.createElement("div",{className:"inputRow2"},n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"number",name:"",id:"",placeholder:"Numer RCP",value:this.state.new_rcp,onChange:this.handleNewRCP}),this.state.errors.rcp&&n.a.createElement("span",null,this.messages.rcp_incorrect)),n.a.createElement("div",{className:"validation"},n.a.createElement("select",{value:this.state.new_status,onChange:this.handleNewStatus},n.a.createElement("option",{value:"Liderka"},"Liderka"),n.a.createElement("option",{value:"Operatorka"},"Operatorka")),this.state.errors.status&&n.a.createElement("span",null,this.messages.status_incorrect))),n.a.createElement("div",{className:"validation"},n.a.createElement("label",{onChange:this.handleNewBrigade},n.a.createElement("input",{type:"radio",value:1,name:"brigade"})," Zmiana I ",n.a.createElement("input",{style:{marginLeft:"10px"},type:"radio",value:2,name:"brigade"})," Zmiana II ",n.a.createElement("input",{style:{marginLeft:"10px"},type:"radio",value:3,name:"brigade"})," Zmiana III "),this.state.errors.brigade&&n.a.createElement("span",null,this.messages.brigade_incorrect)),n.a.createElement("button",{className:"addWorkerButton",onClick:this.handleAddWorker},"Dodaj pracownika"))):null,n.a.createElement(j.a,{striped:!0,responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,this.props.adminStatus?n.a.createElement("th",null):null,n.a.createElement("th",null,"RCP"),n.a.createElement("th",null,"Imi\u0119"),n.a.createElement("th",null,"Nazwisko"),n.a.createElement("th",null,"Stanowisko"),t)),n.a.createElement("tbody",null,a))))}}]),a}(n.a.Component),Z=(t(60),t(32)),K=t.n(Z),B=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"errorMain"},n.a.createElement("div",{className:"rightPanelSide"},n.a.createElement("h2",null," Strona kt\xf3rej szukasz nie istnieje"),n.a.createElement("p",null," Upewnij si\u0119, \u017ce podany adres URL istnieje."),n.a.createElement("button",{className:"homeButton"},n.a.createElement(E.b,{to:"/"},n.a.createElement(b.a,{className:"iconNav"}),"Strona G\u0142\xf3wna"))),n.a.createElement("div",{className:"leftPanelSide"},n.a.createElement("img",{src:K.a}))))},U=(t(62),t(33)),V=t.n(U),M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={newPassword:"",newPasswordRepeat:"",errors:{password:!1,passwordRepeat:!1,passwordCompare:!1,passwordAccept:!1}},t.messages={password:"Has\u0142o musi sk\u0142ada\u0107 si\u0119 minimum z 6 znak\xf3w.",passwordRepeat:"Has\u0142o musi sk\u0142ada\u0107 si\u0119 minimum z 6 znak\xf3w.",passwordCompare:"Has\u0142a nie s\u0105 takie same.",passwordAccept:"Zmiana has\u0142a zako\u0144czona sukcesem."},t.handlePasswordInput=function(e){t.setState({newPassword:e.target.value})},t.handlePasswordRepeatInput=function(e){t.setState({newPasswordRepeat:e.target.value})},t.handleClearInput=function(){t.setState({newPassword:"",newPasswordRepeat:""})},t.handleChangePassword=function(){var e=t.formValidation();console.log(e),e.correct?(t.props.changePassword(t.state.newPassword),t.setState({newPassword:"",newPasswordRepeat:"",errors:{passwordRepeat:!1,passwordAccept:!0}})):t.setState({errors:{password:!e.password,passwordRepeat:!e.passwordRepeat,passwordCompare:!e.passwordCompare}})},t.formValidation=function(){var e=!1,a=!1,r=!1,n=!1;return t.state.newPassword.length>4&&(e=!0),t.state.newPasswordRepeat.length>4&&(a=!0),0!=t.state.newPassword.length&&0!=t.state.newPasswordRepeat.length&&t.state.newPassword===t.state.newPasswordRepeat&&(r=!0),e&&a&&r&&(n=!0),{correct:n,password:e,passwordRepeat:a,passwordCompare:r}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"adminPage"},n.a.createElement("div",{className:"adminPanelImg"},n.a.createElement("img",{src:V.a})),this.props.adminStatus?n.a.createElement("div",{className:"adminPanelForm"},n.a.createElement("h3",null,"Ustaw nowe has\u0142o"),n.a.createElement("div",{className:"formElement"},n.a.createElement("label",null,"Nowe has\u0142o"),n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"password",placeholder:"Nowe Has\u0142o",value:this.state.newPassword,onChange:this.handlePasswordInput}),this.state.errors.password&&n.a.createElement("span",null,this.messages.password))),n.a.createElement("div",{className:"formElement"},n.a.createElement("label",null,"Powt\xf3rz has\u0142o"),n.a.createElement("div",{className:"validation"},n.a.createElement("input",{type:"password",placeholder:"Powt\xf3rz Nowe Has\u0142o",value:this.state.newPasswordRepeat,onChange:this.handlePasswordRepeatInput}),this.state.errors.passwordRepeat&&n.a.createElement("span",null,this.messages.password),this.state.errors.passwordCompare&&n.a.createElement("span",null,this.messages.passwordCompare),this.state.errors.passwordAccept&&n.a.createElement("span",{style:{color:"green"}},this.messages.passwordAccept))),n.a.createElement("div",{className:"formElement-button"},n.a.createElement("button",{className:"dontChangePassword",onClick:this.handleClearInput},"Wyczy\u015b\u0107"),n.a.createElement("button",{className:"changePassword",onClick:this.handleChangePassword},"Zmie\u0144 Has\u0142o"))):n.a.createElement("div",{className:"leftSideHomePage"},n.a.createElement("h3",{style:{textAlign:"center"}},"Brak dost\u0119pu do panelu Administratora"),n.a.createElement("h5",{style:{textAlign:"center"}},"Zaloguj si\u0119 do panelu z u\u017cyciem has\u0142a."))))}}]),a}(n.a.Component),F=(t(64),t(34)),H=t.n(F),D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"homePage"},n.a.createElement("div",{className:"leftSideHomePage"},n.a.createElement("h1",null,"Grafik ",n.a.createElement("span",{style:{color:"#023047"}},"Pracowniczy")),n.a.createElement("h4",null,"Zaplanuj ca\u0142y miesi\u0105c w firmie."),n.a.createElement("p",null,"Projekt przeznaczony dla firm zatrudniaj\u0105cych du\u017ce grupy pracownicze. Aplikacja ta pozwoli zapanowa\u0107 nad grafikiem, z mo\u017cliwo\u015bci\u0105 udost\u0119pnienia grafik\xf3w wszystkim pracownikom. Dodatkowo opcje administratora zabezpieczone has\u0142em nie wymagaj\u0105 od nas zewn\u0119trznego panelu, w kt\xf3rym osoba odpowiedzialna za grafik dokonywa\u0142aby ewentualnych zmian."),n.a.createElement("button",{className:"homePageButton"},n.a.createElement(E.b,{to:"/scheduleUK"},n.a.createElement(k.a,{className:"iconNav"}),"Grafik Ukraina"))),n.a.createElement("div",{className:"rightSideHomePage"},n.a.createElement("img",{src:H.a}))))},G=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.c,null,n.a.createElement(N.a,{path:"/",element:n.a.createElement(D,null)}),n.a.createElement(N.a,{path:"/scheduleUK",element:n.a.createElement(C,{adminStatus:e.adminStatus})}),n.a.createElement(N.a,{path:"/schedulePL",element:n.a.createElement(L,{adminStatus:e.adminStatus})}),n.a.createElement(N.a,{path:"/adminPanel",element:n.a.createElement(M,{adminStatus:e.adminStatus,changePassword:e.changePassword})}),n.a.createElement(N.a,{path:"*",element:n.a.createElement(B,null)})))},T=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={password:"admin",admin:!1,incorrectPassword:!1},t.checkPasswordAdmin=function(e){t.state.admin?t.changeAdminStatus():e===t.state.password?(t.changeAdminStatus(),t.setState({incorrectPassword:!1})):t.setState({incorrectPassword:!0})},t.changeAdminStatus=function(){t.setState({admin:!t.state.admin})},t.changePassword=function(e){t.setState({password:e})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(m.a,{fluid:!0},n.a.createElement(h.a,null,n.a.createElement(y,null)),n.a.createElement(h.a,null,n.a.createElement(f,{adminStatus:this.state.admin,adminPassword:this.state.password,checkPasswordAdmin:this.checkPasswordAdmin,changeAdminStatus:this.changeAdminStatus,incorrectPassword:this.state.incorrectPassword})),n.a.createElement(h.a,{className:"mt-4",style:{minHeight:"80vh"}},n.a.createElement(p.a,null,n.a.createElement(G,{adminStatus:this.state.admin,changePassword:this.changePassword}))),n.a.createElement(h.a,null,n.a.createElement(g,null))))}}]),a}(n.a.Component);l.a.createRoot(document.getElementById("root")).render(n.a.createElement(E.a,{basename:"/grafik-pracowniczy"},n.a.createElement(T,null)))}},[[37,2,1]]]);
//# sourceMappingURL=main.7977bb83.chunk.js.map