(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(3),o=a.n(l),c=(a(10),a(1)),u=a(4),i=n.a.createContext(),d={row:5,col:3,areFieldsReady:!1,tableArray:[],filtred:!1,filtredCol:null,filtredValue:[]},s=function(e,t){return Object(u.a)(e,(function(a){switch(t.type){case"SET__ROW":a.row=t.payload,a.areFieldsReady=!1;break;case"SET__COL":a.col=t.payload,a.areFieldsReady=!1;break;case"TABLE__READY":for(var r=[],n=0;n<e.row;n++){for(var l=[],o=0;o<e.col;o++)l.push("");r.push(l)}a.areFieldsReady=!0,a.tableArray=r;break;case"VALUE__CHANGE":a.tableArray[t.indexRow][t.indexCol]=t.payload;break;case"HANDLE__SORT":a.tableArray.sort((function(e,a){return(isNaN(+e[t.payload])?e[t.payload]>a[t.payload]:+e[t.payload]>+a[t.payload])?t.sortUp?1:-1:(isNaN(+e[t.payload])?e[t.payload]<a[t.payload]:+e[t.payload]<+a[t.payload])?t.sortUp?-1:1:0}));break;case"HANDLE__FILTER":a.filtredValue[t.payload]=t.value,a.filtredCol=t.payload,a.filtred=""!==t.value}}))},p=(a(12),function(){var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,l=t.row,o=t.col;return n.a.createElement("div",{className:"toolBar"},n.a.createElement("input",{type:"number",value:o,onChange:function(e){return a({type:"SET__COL",payload:e.target.value})}}),n.a.createElement("input",{type:"number",value:l,onChange:function(e){return a({type:"SET__ROW",payload:e.target.value})}}),n.a.createElement("button",{onClick:function(){return a({type:"TABLE__READY"})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443"))}),y=function(){var e=Object(r.useContext)(i),t=e.state,a=e.dispatch,l=t.tableArray,o=t.filtred,c=t.filtredCol,u=t.filtredValue,d=o?l.filter((function(e){return e[c].toLowerCase().indexOf(u[c].toLowerCase())>=0})):l;return n.a.createElement("tbody",null,d.map((function(e,t){return n.a.createElement("tr",{key:t},d[0].map((function(e,r){return n.a.createElement("td",{key:r},n.a.createElement("input",{key:r+t,type:"text",className:r%2===1?"even__col":"",value:d[t]?d[t][r]:"",onChange:function(e){return a({type:"VALUE__CHANGE",payload:e.target.value,indexCol:r,indexRow:t})}}))})))})))},f=(a(13),function(e){var t=e.colArray,a=Object(r.useContext)(i),l=(a.state,a.dispatch),o=Object(r.useState)(),u=Object(c.a)(o,2),d=u[0],s=u[1];return Object(r.useEffect)((function(){var e=function(){var e=document.getElementById("header");window.pageYOffset>e.offsetHeight?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),n.a.createElement("thead",null,n.a.createElement("tr",{id:"header",className:d?"fixed":""},t.map((function(e,t){return n.a.createElement("th",{key:t},n.a.createElement("input",{key:t+1,className:"header",type:"text",onChange:function(e){return l({type:"SET__HEADER",payload:e.target.value,indexOfHeader:t})}}))}))))}),E=function(e){var t=e.colArray,a=Object(r.useContext)(i),l=(a.state,a.dispatch);return n.a.createElement("tfoot",null,n.a.createElement("tr",null,t.map((function(e,t){return n.a.createElement("td",{key:t},n.a.createElement("button",{key:Math.random(),className:"sort__button",onClick:function(){return l({type:"HANDLE__SORT",payload:t,sortUp:!0})}},"SORT up"))}))),n.a.createElement("tr",null,t.map((function(e,t){return n.a.createElement("td",{key:t},n.a.createElement("button",{key:Math.random(),className:"sort__button",onClick:function(){return l({type:"HANDLE__SORT",payload:t,sortUp:!1})}},"SORT Down"))}))),n.a.createElement("tr",null,t.map((function(e,t){return n.a.createElement("td",{key:t+1},n.a.createElement("input",{key:t,className:"filter__input",placeholder:"filter...",onChange:function(e){return l({type:"HANDLE__FILTER",payload:t,value:e.target.value})}}))}))))},m=function(){var e=Object(r.useContext)(i),t=e.state,a=(e.dispatch,t.row),l=t.col;if(t.areFieldsReady){for(var o=[],c=[],u=0;u<a;u++)o.push(u);for(var d=0;d<l;d++)c.push(d);return n.a.createElement("table",null,n.a.createElement(f,{colArray:c}),n.a.createElement(y,{colArray:c,rowArray:o}),n.a.createElement(E,{colArray:c}))}return!1};a(14);var _=function(){var e=Object(r.useReducer)(s,d),t=Object(c.a)(e,2),a=t[0],l=t[1];return n.a.createElement(i.Provider,{value:{dispatch:l,state:a}},n.a.createElement("div",{className:"container"},n.a.createElement(p,null),n.a.createElement(m,null)))};o.a.render(n.a.createElement(_,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.4fd13020.chunk.js.map