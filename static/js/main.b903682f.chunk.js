(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(15),a=s.n(i),l=(s(26),s(27),s(6)),r=s.n(l),d=s(16),o=s(17),j=s(18),h=s(21),u=s(20),b=s(19),m=s.n(b),O=(s(47),s(0)),x=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).handleChange=function(e){console.log(e.target.value);var t=c.state.users.filter((function(t){return t.firstName.toLowerCase().includes(e.target.value.toLowerCase())}));c.setState({filteredUsers:t})},c.state={users:[],filteredUsers:[],detail:{}},console.log("constructor"),c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://gist.githubusercontent.com/hmdlohar/a1ae4c3408b79fc82ab3f0af922b1f09/raw/270b29ce63b885df6d2851b71af6db9ccf5e72b9/Edyoda%2520Assigment%25201%2520Data");case 2:t=e.sent,console.log("response",t.data),this.setState({users:t.data}),this.setState({filteredUsers:this.state.users});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectRow",value:function(e){this.setState({detail:e}),console.log("item",e)}},{key:"render",value:function(){var e,t,s,c,n,i,a,l,r,d=this;return console.log("render"),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("i",{className:"fas fa-search"}),Object(O.jsx)("input",{className:"inputColor",onChange:this.handleChange})]}),Object(O.jsx)("table",{className:"head",children:Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"column1",children:"Id"}),Object(O.jsx)("th",{className:"column2",children:"FirstName"}),Object(O.jsx)("th",{className:"column3",children:"LastName"}),Object(O.jsx)("th",{className:"column4",children:"Email"}),Object(O.jsx)("th",{className:"column5",children:"Phone"})]})})}),this.state.filteredUsers.map((function(e){return Object(O.jsx)("table",{className:"info",children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{className:"data-row",onClick:function(){d.selectRow(e)},children:[Object(O.jsx)("td",{className:"column1",children:e.id}),Object(O.jsx)("td",{className:"column2",children:e.firstName}),Object(O.jsx)("td",{className:"column3",children:e.lastName}),Object(O.jsx)("td",{className:"column4",children:e.email}),Object(O.jsx)("td",{className:"column5",children:e.phone})]},e.id)})})})),Object(O.jsxs)("div",{id:"info-wrapper",children:[Object(O.jsx)("h1",{children:"Details"}),Object(O.jsx)("p",{children:"Click on a table item to get detailed information"}),Object(O.jsxs)("div",{id:"info-content",children:[Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)("p",{children:["User selected:  ",this.state.detail.firstName,"  ",this.state.detail.lastName]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Description: "}),Object(O.jsx)("textarea",{cols:"50",rows:"5",readOnly:!0,value:null===(e=this.state.detail)||void 0===e?void 0:e.description})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Address:"})," ",null===(t=this.state.detail)||void 0===t||null===(s=t.address)||void 0===s?void 0:s.streetAddress]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"City:"})," ",null===(c=this.state.detail)||void 0===c||null===(n=c.address)||void 0===n?void 0:n.city]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"State:"})," ",null===(i=this.state.detail)||void 0===i||null===(a=i.address)||void 0===a?void 0:a.state]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Zip:"})," ",null===(l=this.state.detail)||void 0===l||null===(r=l.address)||void 0===r?void 0:r.zip]})]})]})]})}}]),s}(c.Component);var f=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(x,{})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),v()}},[[49,1,2]]]);
//# sourceMappingURL=main.b903682f.chunk.js.map