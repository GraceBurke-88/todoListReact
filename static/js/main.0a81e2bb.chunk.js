(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),s=a(5),c=a(6),u=a(8),i=a(7),m=a(9),k=a(18),p=a.n(k),d=a(4),h=function(e){return l.a.createElement("div",{style:{min_height:"0",margin:"1rem"}},l.a.createElement(d.a,null,l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null," ",e.task.title," "),l.a.createElement(d.a.Text,null," ID: ",e.task.id,"  ",l.a.createElement("br",null)," Type: ",e.task.type)," ",l.a.createElement("br",null),"done"!==e.task.column?l.a.createElement("button",{type:"button",onClick:function(){return e.markRight(e.task)},className:"btn btn-link",style:{float:"right"}},"todo"===e.task.column?"Start Work >":null,"in-progress"===e.task.column?"Request Review >":null,"review"===e.task.column?"Mark Done >":null):null,"todo"!==e.task.column?l.a.createElement("button",{type:"button",onClick:function(){return e.markLeft(e.task)},className:"btn btn-link",style:{float:"right"}},"in-progress"===e.task.column?"< Send Back":null,"review"===e.task.column?"< More Work Required":null,"done"===e.task.column?"< Request Re-Review":null):null)))},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).markRight=function(e){var t=a.props.tasks,n=e.column;"todo"===n&&(e.column="in-progress"),"in-progress"===n&&(e.column="review"),"review"===n&&(e.column="done"),a.props.onUpdateTaskList(t)},a.markLeft=function(e){var t=a.props.tasks,n=e.column;"in-progress"===n&&(e.column="todo"),"review"===n&&(e.column="in-progress"),"done"===n&&(e.column="review"),a.props.onUpdateTaskList(t)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map(function(t){return l.a.createElement(h,{task:t,key:t.id,markRight:e.markRight,markLeft:e.markLeft})}),a=[],n=[],r=[],o=[],s=!0,c=!1,u=void 0;try{for(var i,m=t[Symbol.iterator]();!(s=(i=m.next()).done);s=!0){var k=i.value;"todo"===k.props.task.column?a.push(k):"in-progress"===k.props.task.column?n.push(k):"review"===k.props.task.column?r.push(k):"done"===k.props.task.column&&o.push(k)}}catch(p){c=!0,u=p}finally{try{s||null==m.return||m.return()}finally{if(c)throw u}}return console.log("hello"),l.a.createElement("ul",{className:"task-list list-group"},l.a.createElement("div",null,"`",l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col",style:{background:"lightgrey"}},l.a.createElement("br",null),l.a.createElement("h3",null,"ToDo"),a),l.a.createElement("div",{className:"col",style:{background:"#f2f2f2"}},l.a.createElement("br",null),l.a.createElement("h3",null,"In-Progress"),n),l.a.createElement("div",{className:"col",style:{background:"lightgray"}},l.a.createElement("br",null),l.a.createElement("h3",null,"Review"),r," "),l.a.createElement("div",{className:"col",style:{background:"#f2f2f2"}},l.a.createElement("br",null),l.a.createElement("h3",null,"Done"),o)),l.a.createElement("div",null))))}}]),t}(l.a.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[],errorMessage:""},a.onUpdateTaskList=function(e){a.setState({tasks:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;p.a.get("http://my-json-server.typicode.com/bnissen24/project2DB/posts").then(function(t){e.setState({tasks:t.data})}).catch(function(t){e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"To Do List"),l.a.createElement("hr",null),l.a.createElement("h1",null,"hello"),l.a.createElement(v,{tasks:this.state.tasks,onUpdateTaskList:this.onUpdateTaskList}))}}]),t}(l.a.Component);o.a.render(l.a.createElement(f,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0a81e2bb.chunk.js.map