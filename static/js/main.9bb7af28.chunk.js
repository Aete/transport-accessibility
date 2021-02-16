(this["webpackJsonptransport-accessibility"]=this["webpackJsonptransport-accessibility"]||[]).push([[0],{101:function(t,e,a){},103:function(t,e,a){},104:function(t,e,a){},105:function(t,e,a){},106:function(t,e,a){},107:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),r=a.n(c),s=a(9),o=a.n(s),i=(a(101),a(5)),l=a(51),d=a(11),u=a.n(d),h=a(3);a(103);function b(t,e){var a=e.score_bus,n=e.score_bike,c=e.score_subway,r=25,s=25,o=240,i=[0,0,o+s+25,240+r+25],l=t.append("svg").attr("viewBox",i).attr("preserveAspectRatio","xMinYMid meet"),d=290/parseInt(h.c("svg").style("width"))*12,u=l.append("g").attr("transform","translate(".concat(s,",").concat(r,")")),b=h.a().domain([0,5]).range([0,120]),p=[0,1,2,3,4,5],j=(u.selectAll(".axis-sub").data(p).enter().append("circle").attr("class","axis-sub").attr("cx",120).attr("cy",120).attr("fill","none").attr("stroke","#424242").attr("r",(function(t){return b(t)})),u.selectAll(".label").data(p.slice(1)).enter().append("text").text((function(t){return t})).attr("text-anchor","middle").attr("y",(function(t){return b(t)+b(5)+15})).attr("x",120).style("font-size","10px").attr("fill",(function(t){return"#636363"})),u.append("g").attr("transform","translate(".concat(120,",").concat(120,")")));j.append("circle").attr("cx",0).attr("cy",0).attr("fill","#636363").attr("r",1);j.selectAll(".axis-main").data([1,5,9]).enter().append("line").attr("class","axis-main").attr("x1",0).attr("y1",0).attr("x2",(function(t){return Math.cos(Math.PI*t/6)*b(5)})).attr("y2",(function(t){return Math.sin(Math.PI*t/6)*b(5)})).attr("stroke","#636363");var x="".concat(Math.cos(Math.PI/6)*b(+a),", ").concat(Math.sin(Math.PI/6)*b(+a)),f="0,".concat(-b(+c)),y="".concat(Math.cos(5*Math.PI/6)*b(+n),", ").concat(Math.sin(5*Math.PI/6)*b(+n));j.append("polygon").attr("fill","#2196F3").attr("fill-opacity",.3).attr("stroke","#2963FF").attr("stroke-width",2).attr("points","0,0 0,0 0,0").transition().duration(300).attr("points","".concat(x," ").concat(f," ").concat(y)),j.selectAll(".point").data([a,n,c]).enter().append("circle").attr("class","point").attr("cx",(function(t,e){return Math.cos(Math.PI*(4*e+1)/6)*b(t)})).attr("cy",(function(t,e){return Math.sin(Math.PI*(4*e+1)/6)*b(t)})).attr("r","3").attr("fill","#2196F3"),j.append("text").text("bus").attr("text-anchor","middle").attr("x",Math.cos(Math.PI/6)*b(6)).attr("y",Math.sin(Math.PI/6)*b(6)).attr("fill","#FFFFFF").style("font-size","".concat(d,"px")),j.append("text").text("bike").attr("text-anchor","middle").attr("x",Math.cos(5*Math.PI/6)*b(6)).attr("y",Math.sin(5*Math.PI/6)*b(6)).attr("fill","#FFFFFF").style("font-size","".concat(d,"px")),j.append("text").text("subway").attr("text-anchor","middle").attr("x",Math.cos(9*Math.PI/6)*b(6)).attr("y",Math.sin(9*Math.PI/6)*b(6)+12).attr("fill","#FFFFFF").style("font-size","".concat(d,"px"))}a(104);function p(t){var e=t.scores,a=e.score_bus,r=e.score_bike,s=e.score_subway,o=Object(c.useState)(null),l=Object(i.a)(o,2),d=l[0],u=l[1],p=Object(c.useRef)();return Object(c.useEffect)((function(){return d||u(new b(h.c(p.current),{score_bus:a,score_bike:r,score_subway:s})),u(null)}),[d,a,r,s]),Object(n.jsx)("div",{className:"chart",children:Object(n.jsx)("div",{ref:p})})}u.a.accessToken="pk.eyJ1Ijoic2doYW4iLCJhIjoiY2szamxqbjZnMGtmbTNjbXZzamh4cng3dSJ9.GGv4GVVoZ811d6PKi54PrA";var j=function(t){var e=t.handleModal,a=Object(c.useRef)(null),r=Object(c.useState)(null),s=Object(i.a)(r,2)[1];return Object(c.useEffect)((function(){var t=h.b[11].map((function(t,e){return[e,t]})).flat(1),c=new u.a.Map({container:a.current,style:"mapbox://styles/sghan/ck1ljdcmy16fc1cpg0f4qh3wu",center:[127.06243582034075,37.49804469532547],zoom:12.7,attributionControl:!1});return c.addControl(new u.a.AttributionControl({compact:!0})),c.on("load",(function(){c.addSource("hexagons",{type:"geojson",data:"https://raw.githubusercontent.com/Aete/transport-accessibility/master/src/data/hexagon_res_10_400m_count/hexagon_with_data.geojson"}),c.addLayer({id:"hexagons",type:"fill",source:"hexagons",layout:{},paint:{"fill-color":["interpolate",["linear"],["get","total_score"]].concat(Object(l.a)(t)),"fill-opacity":.7}}),s(c)})),c.on("click","hexagons",(function(t){var a=t.features[0].properties,r=a.x,s=a.y,i=a.score_bus,l=a.score_subway,d=a.score_bike,h=a.total_score;console.log(t.features[0].properties);var b=document.createElement("div");b.className="description";var j=document.createElement("div");j.className="charts";var f=document.createElement("div");f.appendChild(b),f.appendChild(j),o.a.render(Object(n.jsx)(x,{total_score:h,score_bus:i,score_subway:l,score_bike:d,handleModal:e}),b),o.a.render(Object(n.jsx)(p,{scores:{score_bus:i,score_subway:l,score_bike:d}}),j);(new u.a.Popup).setLngLat([r,s]).setDOMContent(f).addTo(c)})),function(){return c.remove()}}),[e]),Object(n.jsx)("div",{className:"map",children:Object(n.jsx)("div",{className:"map-container",ref:a})})};function x(t){var e=t.total_score,a=t.score_bus,c=t.score_subway,r=t.score_bike,s=t.handleModal;return Object(n.jsxs)("section",{className:"textInfo",children:[Object(n.jsx)("h1",{children:"Accessibility score"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["total score: ",Math.round(100*e)/100," / 15"]}),Object(n.jsxs)("li",{children:["subway: ",Math.round(100*c)/100," / 5"]}),Object(n.jsxs)("li",{children:["bus: ",Math.round(100*a)/100," / 5"]}),Object(n.jsxs)("li",{children:["bike: ",Math.round(100*r)/100," / 5"]}),Object(n.jsx)("li",{children:Object(n.jsx)("span",{className:"aboutBtn",onTouchStart:s,onClick:s,children:"About the project (click)"})})]})]})}a(105);function f(t){var e=t.handleModal;return Object(n.jsxs)("article",{className:"Modal",children:[Object(n.jsxs)("header",{className:"Modal__header",children:[Object(n.jsx)("h1",{children:"Transportation Accessibility Dashboard"}),Object(n.jsx)("button",{onTouchStart:e,onClick:e,children:"close"})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)("p",{className:"author",children:"2021. 12 ~ present, Seunggyun Han & Woowon Chung"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"In Seoul"}),", where personal car ownership is low and dependence on public transportation is very high, accessibility to public transportation is a very important factor when choosing a place to work or live. Therefore, in the places with good access to public transport, the most expensive and large-scale apartment complexes have been built, and in places with relatively poor accessibility, small and inexpensive multi-family houses are located."]}),Object(n.jsx)("p",{children:"In this study, targeting the Gangnam district, we investigated the areas where actual public transportation (bicycle, subway, bus) accessibility is weak and where it is good. In addition, by analyzing the types of housing in each surveyed region, we tried to find a district where redevelopment would be possible and a place where a new public transport plan is needed."})]})]})}a(106);var y=function(){var t=Object(c.useState)(!0),e=Object(i.a)(t,2),a=e[0],r=e[1],s=Object(c.useCallback)((function(){r((function(t){return!t}))}),[]);return Object(n.jsxs)("main",{className:"dashboard",children:[a&&Object(n.jsx)(f,{handleModal:s}),Object(n.jsx)(j,{handleModal:s})]})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),m()}},[[107,1,2]]]);
//# sourceMappingURL=main.9bb7af28.chunk.js.map