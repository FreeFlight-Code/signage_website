(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),c=a(3),s=a(4),l=a(6),u=a(5),d=a(7),m=a(2),p=a.n(m),h=a(10);function f(e){var t=e.video,a=t.url,n=t.title;return r.a.createElement("iframe",{id:"player",title:n,src:a,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,autoPlay:"1"})}var v=a(8),y={get:function(){return!!v.length&&v},runProgram:function(){var e=this,t=[];!function(){for(var e=0;e<v.length;e++)for(var a=0;a<v[e].adsPerDay;a++)t.push(v[e])}();for(var a=function(a){var n,r=t[(n=t.length,Math.floor(Math.random()*Math.floor(n)))];setInterval(function(){console.log(t),e.currentVideo=t[r],t.splice(r,1)},1e4)},n=0;n<t.length;n++)a();this.currentVideo=null},currentVideo:null},b=a(9),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={videoIndex:0,currentVideo:{},running:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.checkData(b)&&this.start()}},{key:"checkData",value:function(e){if(this.hasData(e)&&this.indexIsGood(e))return!0}},{key:"hasData",value:function(e){try{if(e.length)return!0}catch(t){console.log(t)}}},{key:"indexIsGood",value:function(e){return this.state.videoIndex<e.length}},{key:"start",value:function(){var e=Object(h.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({videoIndex:0,currentVideo:b[0]});case 2:this.play();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"play",value:function(){var e=Object(h.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("play"),e.next=3,this.setState({running:!0});case 3:this.nextVideo();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"playPause",value:function(){this.state.running?this.stop():this.play()}},{key:"stop",value:function(){console.log("stop"),this.setState({running:!1})}},{key:"checkAds",value:function(){return!!y.currentVideo}},{key:"nextVideo",value:function(){var e=Object(h.a)(p.a.mark(function e(){var t,a,n,r,o=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.videoIndex,n=t.currentVideo,r=a+1,console.log(y.currentVideo),!y.currentVideo){e.next=8;break}return e.next=6,setTimeout(function(){o.setState({currentVideo:y.currentVideo})},1e3*n.delay);case 6:e.next=14;break;case 8:if(r!==b.length){e.next=12;break}this.start(),e.next=14;break;case 12:return e.next=14,setTimeout(function(){o.setState({videoIndex:r,currentVideo:b[r]}),o.nextVideo()},1e3*n.delay);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.currentVideo;return e&&r.a.createElement(f,{video:e})}}]),t}(n.Component);function k(e){return r.a.createElement("div",{className:"adSpace"},r.a.createElement("div",{className:"adText"},"To advertise here contact Suite 505"),r.a.createElement("img",{id:"gsemlogo",className:"adSpaceLogo",src:"https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png",alt:"Ad logo"}),r.a.createElement("div",{className:"adText"},"Your logo here"))}var w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.mapUrl,a=e.orientation,n=e.header,o=e.dataBottomDescriptor,i=e.dataTop,c=e.dataBottom,s=a.includes("portrait")?"Universal Container-vertical":"Universal Container",l=function(e,t){return e.map(function(e,a){return r.a.createElement("div",{className:"suite ".concat(t),key:"".concat(t,"_").concat(a)},r.a.createElement("span",{className:"suiteName"},e.name.toUpperCase()),r.a.createElement("span",{className:"suiteNumber"},e.suite))})};return r.a.createElement("div",{className:s},r.a.createElement(k,null),r.a.createElement("img",{id:"simustreamLogo",src:"https://gsemtechnologies.com/wp-content/uploads/2018/01/SimustreamWebHorizontal-website-550x400.png",alt:"Simustream company Logo"}),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,n)),r.a.createElement(g,null),r.a.createElement("img",{alt:"map for this floor",className:"map",src:t}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"label"},"THIS LEVEL"),l(i,"top"),r.a.createElement("div",{className:"label bottom"},o.toUpperCase()),l(c,"bottom")))}}]),t}(n.Component),x=a(19),E=a.n(x),O=(a(47),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).pathName=window.location.pathname.slice(1).split("/"),a.location={building:a.pathName[1],tvIndex:a.pathName[2]},a.state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:3031/tvdata/".concat(this.location.building,"/").concat(this.location.tvIndex)).then(function(t){t.data&&e.setState({tv:t.data})}).catch(function(e){return console.log("no data from backend")})}},{key:"render",value:function(){var e=this.state.tv;return e&&e.orientation&&e.dataBottom.length?r.a.createElement(w,{data:e}):r.a.createElement("div",null,"  Undefined Route... format should be /tvData/[buildingName]/[tv number]  ")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{title:"CRM company_name",url:"https://www.youtube.com/embed/4Akc_yDkM2A?autoplay=1",adsPerDay:3,timeRequested:1230,delay:20},{tile:"CRM company_name",url:"https://www.youtube.com/embed/4Akc_yDkM2A?autoplay=1",adsPerDay:5,timeRequested:1230,delay:10}]},9:function(e){e.exports=[{title:"JSX Events - Western Industry",url:"https://play.simustream.com/?id=5d3350fb3cb5c5515cbd21be",delay:5},{title:"Motozoo Powersports - Powersports",url:"https://play.simustream.com/?id=5d3ba8d93cb5c5515cbd3254",delay:5},{title:"Dr. Corey Yazed",url:"https://play.simustream.com/?id=5d431ac5d0824466a8a5ccdc",delay:5},{title:"doTERRA Link",url:"https://play.simustream.com/?id=5d4a62924c6f0836310e5ada",delay:5},{title:"ThriveLife",url:"https://play.simustream.com?id=5d4a69384c6f0836310e5b1d",delay:5},{title:"XLEAR",url:"https://play.simustream.com/?id=5d4a6d6b4c6f0836310e5b60",delay:5},{title:"Blender Bottle",url:"https://play.simustream.com/?id=5d4a6f504c6f0836310e5b7c",delay:5},{title:"BoardCO",url:"https://play.simustream.com/?id=5d4a71c34c6f0836310e5bb9",delay:5},{title:"The Original Scrapbook",url:"https://play.simustream.com?id=5d4a74454c6f0836310e5bf7",delay:5}]}},[[20,1,2]]]);
//# sourceMappingURL=main.f3f12ef5.chunk.js.map