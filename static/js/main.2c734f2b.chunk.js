(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/BR_vert_upper.ec552434.jpg"},function(e){e.exports={upper:[{suite:501,name:"North eastern services (NES)"},{suite:502,name:"Orange Geek"},{suite:503,name:"Paradigm Direct Services"},{suite:504,name:"Kirton McConkie (Entrance)"},{suite:505,name:"GSEM Technologies"},{suite:506,name:"Kirton McConkie"},{suite:507,name:"Sierra Hospice"}],lower:[{suite:401,name:"AVAILABLE"},{suite:402,name:"AVAILABLE"},{suite:403,name:"AVAILABLE"},{suite:404,name:"AVAILABLE"},{suite:405,name:"AVAILABLE"},{suite:406,name:"AVAILABLE"}]}},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(16),a(1)),s=a(2),u=a(4),o=a(3),m=a(5),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={defaultVideo:"https://www.youtube.com/embed?playlist&list=PLvFz1VAZcZYZWb3i7xlswGDTz2WJp3MLr&autoplay=1&index=5",currentVideo:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("iframe",{id:"ytPlayer",title:"YouTube Player",src:this.state.currentVideo||this.state.defaultVideo,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}}]),t}(n.Component),d=(a(17),a(6)),E=a.n(d),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.suites;return r.a.createElement("div",{className:"UpperPageContainer"},r.a.createElement("div",{className:"blackridge"},"Blackridge Building II"),r.a.createElement("div",{className:"gsemLogo",onClick:this.props.handleClick}),r.a.createElement("div",{className:"mapSide"},r.a.createElement("img",{src:E.a,className:"q1",alt:"upper level map"}),r.a.createElement("div",{className:"q2"},r.a.createElement("h6",null,"THIS LEVEL"),e.upper.length?e.upper.map(function(e,t){return r.a.createElement("div",{className:"suite",key:"UpperSuite_".concat(t)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data"),r.a.createElement("h6",null,"DOWNSTAIRS"),e.lower.length?e.lower.map(function(e,t){return r.a.createElement("div",{className:"suite",key:"LowerSuite_".concat(t)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data"))),r.a.createElement("div",{className:"advertisementSide"},r.a.createElement(p,null),r.a.createElement("div",null,"To advertise here contact Suite 505")))}}]),t}(n.Component),v=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.suites;return r.a.createElement("div",{className:"LowerPageContainer"},r.a.createElement("div",{className:"gsemLogo",onClick:this.props.handleClick}),r.a.createElement("div",{className:"advertisementSide_lower"},r.a.createElement(p,null),r.a.createElement("div",null,"To advertise here contact Suite 505")),r.a.createElement("div",{className:"blackridge_lower"},"Blackridge Building II"),r.a.createElement("div",{className:"mapSideVertical"},r.a.createElement("img",{src:E.a,alt:"lower level map"}),r.a.createElement("div",{className:"suitesVertical"},r.a.createElement("h6",null,"THIS LEVEL"),e.lower.length?e.lower.map(function(e,t){return r.a.createElement("div",{className:"suite",key:"LowerSuite_".concat(t)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data"),r.a.createElement("h6",null,"UPSTAIRS"),e.upper.length?e.upper.map(function(e,t){return r.a.createElement("div",{className:"suite",key:"UpperSuite_".concat(t)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data"))))}}]),t}(n.Component)),N=a(7),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(){a.setState({upperTV:!a.state.upperTV})},a.state={upperTV:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.upperTV?r.a.createElement(h,{suites:N,handleClick:this.handleClick.bind(this)}):r.a.createElement(v,{suites:N,handleClick:this.handleClick.bind(this)})}}]),t}(n.Component);var f=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.2c734f2b.chunk.js.map