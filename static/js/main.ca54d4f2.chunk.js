(this["webpackJsonpakshay-task-new"]=this["webpackJsonpakshay-task-new"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),i=n.n(r),c=n(4),o=n.n(c),a=(n(15),n(3)),u=n.n(a),l=n(5),d=n(6),g=n(7),h=n(9),p=n(8);function f(e){var t=1e3;return e>t&&(e=t),Math.floor(Math.random()*t)%e===0}var v=function(e){var t="post",n=[];return f(2)&&n.push("pre"+e),f(2)&&n.push(e),f(2)&&n.push(e+t),f(2)&&n.push("pre"+e+t),new Promise((function(e,t){var s=200*Math.random();setTimeout((function(){f(10)?t():e(n)}),s)}))},x=(n(17),function(e){var t=e.suggestions,n=e.suggestionSelected,r=e.selectedIndex,i=e.hideSuggestions;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"outclick-div",onClick:i}),Object(s.jsx)("ul",{className:"dropdown-menu show",children:t.map((function(e,t){return Object(s.jsx)("li",{className:"dropdown-item ".concat(r===t&&"highlight"),onClick:function(){return n(e)},children:e},e)}))})]})}),j=13,m=38,S=40,b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).getDataFromServer=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(t);case 3:n=e.sent,s.setState({suggestions:n,selectedIndex:0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Got Error In Fetching Suggestion",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s.onInputChanged=function(e){var t=s.state.inputText.split(" ").slice(-1)[0],n=e.target.value.split(" ").slice(-1)[0];s.setState({inputText:e.target.value}),n&&t!==n?s.debouncedInputChange(n):s.hideSuggestions()},s.suggestionSelected=function(e){var t=s.state.inputText.split(" ");t.splice(t.length-1,1,e);var n=t.join(" ").concat(" ");s.setState({inputText:n}),s.hideSuggestions(),s.inputBoxRef.current.focus()},s.hideSuggestions=function(){s.setState({suggestions:[],selectedIndex:0})},s.onKeyDown=function(e){var t=s.state,n=t.suggestions,r=t.selectedIndex;if(0!==n.length)switch(e.which){case m:var i=0===r?n.length-1:r-1;return void s.setState({selectedIndex:i});case S:var c=r===n.length-1?0:r+1;return void s.setState({selectedIndex:c});case j:return void s.suggestionSelected(n[r]);default:return}},s.state={inputText:"",suggestions:[],selectedIndex:0},s.inputBoxRef=i.a.createRef(),s.debouncedInputChange=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function(){e&&clearTimeout(e),e=setTimeout(t.bind.apply(t,[this].concat(Array.prototype.slice.call(arguments))),n)}}(s.getDataFromServer,200),s}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.inputText,n=e.suggestions,r=e.selectedIndex;return Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",value:t,ref:this.inputBoxRef,onChange:this.onInputChanged,onKeyDown:this.onKeyDown}),n.length>0&&Object(s.jsx)(x,{suggestions:n,selectedIndex:r,hideSuggestions:this.hideSuggestions,suggestionSelected:this.suggestionSelected})]})}}]),n}(i.a.Component);var w=function(){return Object(s.jsx)(b,{})};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ca54d4f2.chunk.js.map