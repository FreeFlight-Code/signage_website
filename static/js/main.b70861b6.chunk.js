(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports={upper:[{suite:501,name:"GSEM TEchnologies"},{suite:502,name:"ACME CONSTRUCTION"},{suite:503,name:"LEGAL SERVICES"},{suite:504,name:"CHILD CARE LLC."},{suite:505,name:"AVAILABLE"},{suite:506,name:"LAWYERS R US"},{suite:507,name:"CALL CENTER TROUBLESHOOTING"}],lower:[{suite:401,name:"AVAILABLE"},{suite:402,name:"AVAILABLE"},{suite:403,name:"AVAILABLE"},{suite:404,name:"AVAILABLE"},{suite:405,name:"AVAILABLE"},{suite:406,name:"AVAILABLE"}]}},,,function(e){e.exports=["f1c50492a59c9c098fc4474b47d74bdd","720e4251a6caf3d6a17732de125f6605"]},function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),l=(t(16),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return console.log(window.location),r.a.createElement("div",{className:"App"},"Home Page",r.a.createElement("a",{href:"/lower"},"Lower Level"),r.a.createElement("a",{href:"/upper"},"Upper Level"))}}]),a}(n.Component),d=t(6),E=t(9),A=(t(17),d.upper),w=d.lower,f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).imageMap={upper:{backgroundImage:"url(https://2016.minneapolis.wordcamp.org/files/2016/05/venue-map.png)"},lower:{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLsehmf34QmCGXmA6wzbByzduV1PIvCR5pB-MGkAY3weifwXU)"}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=window.location.pathname.replace(/[^a-zA-Z]+/g,""),a=function(){if("lower"!==e)return!0}(),t=a?null:{transform:"rotate(90deg)"},n=function(){return A.length?A.map(function(e,a){return r.a.createElement("div",{className:"suite",key:"UpperSuite_".concat(a)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data")},c=function(){return w.length?w.map(function(e,a){return r.a.createElement("div",{className:"suite",key:"LowerSuite_".concat(a)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))}):r.a.createElement("div",null,"no data")};return r.a.createElement("div",{className:"UpperPageContainer"},r.a.createElement("div",{className:"mapSide",style:t},r.a.createElement("div",{className:"headerBar"},r.a.createElement("span",{className:"blackburn"},"Blackridge Building II"),r.a.createElement("div",{className:"gsemLogo"})),r.a.createElement("div",{className:"q1",style:a?this.imageMap.upper:this.imageMap.lower}),r.a.createElement("div",{className:"q2"},r.a.createElement("h6",null,"THIS LEVEL"),a?n():c(),r.a.createElement("h6",null,a?"DOWNSTAIRS":"UPSTAIRS"),a?c():n())),r.a.createElement("div",{className:"advertisementSide",style:t},r.a.createElement("iframe",{id:"advertisement_upper_screen",title:"advertisement_upper_screen",src:"https://simustream.com/watch/gsem_technologies/".concat(E[0]),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("div",null,"Advertise here contact Suite 505")))}}]),a}(n.Component);var h=function(){return"/"===window.location.pathname?r.a.createElement(p,null):r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.b70861b6.chunk.js.map