(this.webpackJsonpchatty=this.webpackJsonpchatty||[]).push([[0],{24:function(e,t,a){},30:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),i=(a(24),a(10)),l=a(11),o=a(13),u=a(12),m=a(22),h=a(1),p=a(4),b=a(17),d=a.n(b);d.a.initializeApp({apiKey:"AIzaSyDXGr92Nd6th3u7BHKLt4o3kE-82sJw2hA",authDomain:"chatty-a37af.firebaseapp.com",databaseURL:"https://chatty-a37af.firebaseio.com"});var g=d.a.auth,v=d.a.database();var f=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Chatty"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},g().currentUser?r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(p.b,{className:"nav-item nav-link mr-3",to:"/chat"},"Profile"),r.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return g().signOut()}},"Logout")):r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(p.b,{className:"nav-item nav-link mr-3",to:"/login"},"Sign In"),r.a.createElement(p.b,{className:"nav-item nav-link mr-3",to:"/signup"},"Sign Up")))))};var E=function(){return r.a.createElement("footer",{className:"pt-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 Chatty 2020.")))},y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(f,null),r.a.createElement("section",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid py-5"},r.a.createElement("div",{className:"container text-center py-5"},r.a.createElement("h1",{className:"display-4"},"Welcome to Chatty"),r.a.createElement("p",{className:"lead"},"A great place to share your thoughts with friends"),r.a.createElement("div",{className:"mt-4"},r.a.createElement(p.b,{className:"btn btn-primary px-5 mr-3",to:"/signup"},"Create New Account"),r.a.createElement(p.b,{className:"btn px-5",to:"/login"},"Login to Your Account"))))),r.a.createElement(E,null))}}]),a}(n.Component),N=a(3),S=a.n(N),w=a(9),k=a(5),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:g().currentUser,chats:[],content:"",readError:null,writeError:null,loadingChats:!1},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.myRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t,a=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0}),t=this.myRef.current;try{v.ref("chats").on("value",(function(e){var n=[];e.forEach((function(e){n.push(e.val())})),n.sort((function(e,t){return e.timestamp-t.timestamp})),a.setState({chats:n}),t.scrollBy(0,t.scrollHeight),a.setState({loadingChats:!1})}))}catch(n){this.setState({readError:n.message,loadingChats:!1})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(w.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,e.next=6,v.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid});case 6:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"chat-area",ref:this.myRef},this.state.loadingChats?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",this.state.chats.map((function(t){return r.a.createElement("p",{key:t.timestamp,className:"chat-bubble "+(e.state.user.uid===t.uid?"current-user":"")},t.content,r.a.createElement("br",null),r.a.createElement("span",{className:"chat-time float-right"},e.formatTime(t.timestamp)))}))),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"mx-3"},r.a.createElement("textarea",{className:"form-control",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{type:"submit",className:"btn btn-submit px-5 mt-4"},"Send")),r.a.createElement("div",{className:"py-5 mx-3"},"Login in as: ",r.a.createElement("strong",{className:"text-info"},this.state.user.email)))}}]),a}(n.Component),O=a(16);function x(){var e=new g.GoogleAuthProvider;return g().signInWithPopup(e)}function C(){var e=new g.GithubAuthProvider;return g().signInWithPopup(e)}var I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,email:"",password:""},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.googleSignIn=n.googleSignIn.bind(Object(k.a)(n)),n.githubSignIn=n.githubSignIn.bind(Object(k.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,g().createUserWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(w.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(w.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign Up to",r.a.createElement(p.b,{className:"title ml-2",to:"/"},"Chatty")),r.a.createElement("p",{className:"lead"},"Fill in the form below to create an account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",type:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Sign up"),r.a.createElement("p",null,"Or"),r.a.createElement("button",{className:"btn btn-danger mr-2",onClick:this.googleSignIn,type:"button"},"Sign up with Google"),r.a.createElement("button",{className:"btn btn-secondary",onClick:this.githubSignIn,type:"button"},"Sign up with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Login")))))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,email:"",password:""},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n.googleSignIn=n.googleSignIn.bind(Object(k.a)(n)),n.githubSignIn=n.githubSignIn.bind(Object(k.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,g().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(w.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(w.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Login to",r.a.createElement(p.b,{to:"/"},"Chatty")),r.a.createElement("p",{className:"lead"},"Fill in the form below to login to your account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",type:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Login")),r.a.createElement("p",null,"You can also log in with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign in with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign in with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(p.b,{to:"/signup"},"Sign up"))))}}]),a}(n.Component);function D(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function L(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,["component","authenticated"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/chat"})}}))}var P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(p.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:y}),r.a.createElement(D,{path:"/chat",authenticated:this.state.authenticated,component:j}),r.a.createElement(L,{path:"/signup",authenticated:this.state.authenticated,component:I}),r.a.createElement(L,{path:"/login",authenticated:this.state.authenticated,component:A})))}}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.98088d30.chunk.js.map