(this["webpackJsonpmanagement-done"]=this["webpackJsonpmanagement-done"]||[]).push([[1],{110:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"e",(function(){return s})),e.d(n,"d",(function(){return f})),e.d(n,"f",(function(){return l}));var r=e(34),c=e(43),u=e(0),a=function(t){if(!t)return{};var n=Object(c.a)({},t);return Object.keys(t).forEach((function(e){(function(t){return void 0===t||null===t||""===t})(t[e])&&delete n[e]})),n},o=function(){return window.location.href=window.location.origin},i=function(t,n){var e=Object.entries(t).filter((function(t){var e=Object(r.a)(t,1)[0];return n.includes(e)}));return Object.fromEntries(e)},s=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=Object(u.useRef)(document.title).current;Object(u.useEffect)((function(){document.title=t}),[t]),Object(u.useEffect)((function(){return function(){n||(document.title=e)}}),[n,e])},f=function(t,n){var e=Object(u.useState)(t),c=Object(r.a)(e,2),a=c[0],o=c[1];return Object(u.useEffect)((function(){var e=setTimeout((function(){return o(t)}),n);return function(){return clearTimeout(e)}}),[t,n]),a},l=function(){var t=Object(u.useRef)(!1);return Object(u.useEffect)((function(){return t.current=!0,function(){return t.current=!1}})),t}},173:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return j}));var r=e(19),c=e.n(r),u=e(43),a=e(170),o=e(50),i=e(221),s=e.n(i),f=e(0),l=e(79),d=e(76),b=function(){var t=Object(o.a)(c.a.mark((function t(n,e){var r,i,f,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,i=e.token,e.headers,f=Object(a.a)(e,["query","token","headers"]),"GET"===(l=Object(u.a)({method:"GET",headers:{Authorization:i?"Bearer ".concat(i):"","Content-Type":r?"application/json":""}},f)).method.toUpperCase()?n+="?".concat(s.a.stringify(r)):l.body=JSON.stringify(r||{}),t.abrupt("return",fetch("".concat("http://localhost:3001","/").concat(n),l).then(function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==n.status){t.next=5;break}return t.next=3,d.c();case 3:return window.location.reload(),t.abrupt("return",Promise.reject({message:"\u8bf7\u91cd\u65b0\u767b\u9646"}));case 5:return t.next=7,n.json();case 7:if(e=t.sent,!n.ok){t.next=12;break}return t.abrupt("return",e);case 12:return t.abrupt("return",Promise.reject(e));case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),j=function(){var t=Object(l.b)().user;return Object(f.useCallback)((function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var c=e[0],a=e[1];return b(c,Object(u.a)(Object(u.a)({},a),{},{token:null===t||void 0===t?void 0:t.token}))}),[null===t||void 0===t?void 0:t.token])}},174:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(34),c=e(43),u=e(0),a=e(110),o={stat:"idle",data:null,error:null},i={throwOnError:!1},s=function(t,n){var e=Object(c.a)(Object(c.a)({},i),n),s=Object(u.useReducer)((function(t,n){return Object(c.a)(Object(c.a)({},t),n)}),Object(c.a)(Object(c.a)({},o),t)),f=Object(r.a)(s,2),l=f[0],d=function(t){var n=Object(a.f)();return Object(u.useCallback)((function(){return n.current?t.apply(void 0,arguments):void 0}),[n,t])}(f[1]),b=Object(u.useState)((function(){return function(){}})),j=Object(r.a)(b,2),O=j[0],p=j[1],h=Object(u.useCallback)((function(t){return d({data:t,stat:"success",error:null})}),[d]),v=Object(u.useCallback)((function(t){return d({data:null,stat:"error",error:t})}),[d]),m=Object(u.useCallback)((function(t,n){if(!t||!t.then)throw new Error("\u8bf7\u4f20\u5165Promise\u53c2\u6570");return p((function(){return function(){(null===n||void 0===n?void 0:n.retry)&&m(null===n||void 0===n?void 0:n.retry,n)}})),d({stat:"loading"}),t.then((function(t){return h(t),t})).catch((function(t){return v(t),e.throwOnError?Promise.reject(t):t}))}),[e.throwOnError,h,v,d]);return Object(c.a)({isIdle:"idle"===l.stat,isLoading:"loading"===l.stat,isError:"error"===l.stat,isSuccess:"success"===l.stat,run:m,setData:h,setError:v,retry:O},l)}},241:function(t,n,e){},242:function(t,n,e){},328:function(t,n){},408:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e.n(r),u=e(31),a=e.n(u),o=(e(241),e(242),e(127)),i=e(217),s=e(128),f=e(143),l=function(t){Object(s.a)(e,t);var n=Object(f.a)(e);function e(){var t;Object(o.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=n.call.apply(n,[this].concat(c))).state={error:null},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this.state.error,n=this.props,e=n.fallbackRender,r=n.children;return t?e({error:t}):r}}],[{key:"getDerivedStateFromError",value:function(t){return{error:t}}}]),e}(c.a.Component),d=e(77),b=e(79),j=e(28),O=c.a.lazy((function(){return Promise.all([e.e(6),e.e(5)]).then(e.bind(null,441))})),p=c.a.lazy((function(){return e.e(7).then(e.bind(null,440))}));var h=function(){var t=Object(b.b)().user;return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l,{fallbackRender:d.c,children:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(d.d,{}),children:t?Object(j.jsx)(O,{}):Object(j.jsx)(p,{})})})})},v=e(225),m=(e(405),e(415)),g=e(234),x=e(172),w=function(t){var n=t.children,e=new m.a;return Object(j.jsx)(g.a,{client:e,children:Object(j.jsx)(x.a,{children:Object(j.jsx)(b.a,{children:n})})})};Object(v.a)((function(){a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{children:Object(j.jsx)(h,{})})}),document.getElementById("root"))}))},76:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return l})),e.d(n,"c",(function(){return d}));var r=e(19),c=e.n(r),u=e(50),a="http://localhost:3001",o="__auth_provider_token__",i=function(){return window.localStorage.getItem(o)},s=function(t){return window.localStorage.setItem(o,t.user.token||""),t.user},f=function(t){return fetch("".concat(a,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=8;break}return t.t0=s,t.next=4,n.json();case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 8:return t.t2=Promise,t.next=11,n.json();case 11:return t.t3=t.sent,t.abrupt("return",t.t2.reject.call(t.t2,t.t3));case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},l=function(t){return fetch("".concat(a,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var t=Object(u.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=8;break}return t.t0=s,t.next=4,n.json();case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 8:return t.t2=Promise,t.next=11,n.json();case 11:return t.t3=t.sent,t.abrupt("return",t.t2.reject.call(t.t2,t.t3));case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},d=function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.localStorage.removeItem(o));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},77:function(t,n,e){"use strict";e.d(n,"e",(function(){return b})),e.d(n,"b",(function(){return j})),e.d(n,"a",(function(){return O})),e.d(n,"f",(function(){return h})),e.d(n,"d",(function(){return v})),e.d(n,"c",(function(){return m}));var r,c,u,a,o=e(96),i=e(97),s=e(409),f=e(148),l=e(165),d=e(28),b=i.a.div(r||(r=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  margin-bottom: ",";\n  > * {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    margin-right: ",";\n  }\n"])),(function(t){return t.between?"space-between":void 0}),(function(t){return"number"===typeof t.marginBottom?t.marginBottom+"rem":t.marginBottom?"2rem":void 0}),(function(t){return"number"===typeof t.gap?t.gap+"rem":t.gap?"2rem":void 0})),j=function(t){var n=t.error;return(null===n||void 0===n?void 0:n.message)?Object(d.jsx)(s.a.Text,{type:"danger",children:null===n||void 0===n?void 0:n.message}):null},O=Object(i.a)(f.a)(c||(c=Object(o.a)(["\n  padding: 0;\n"]))),p=i.a.div(u||(u=Object(o.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),h=i.a.div(a||(a=Object(o.a)(["\n  padding: 3.2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),v=function(){return Object(d.jsx)(p,{children:Object(d.jsx)(l.a,{size:"large"})})},m=function(t){var n=t.error;return Object(d.jsx)(p,{children:Object(d.jsx)(j,{error:n})})}},79:function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return h}));var r=e(19),c=e.n(r),u=e(50),a=e(76),o=e(0),i=e(234),s=e(173),f=e(174),l=e(77),d=e(110),b=e(28),j=function(){var t=Object(u.a)(c.a.mark((function t(){var n,e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,!(e=a.a())){t.next=7;break}return t.next=5,Object(s.a)("me",{token:e});case 5:r=t.sent,n=r.user;case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=Object(o.createContext)(null),p=function(t){var n=t.children,e=Object(f.a)(),r=e.data,c=e.error,u=e.isLoading,s=e.isIdle,p=e.isError,h=e.run,v=e.setData,m=Object(i.b)();return Object(o.useEffect)((function(){h(j())}),[h]),s||u?Object(b.jsx)(l.d,{}):p?Object(b.jsx)(l.c,{error:c}):Object(b.jsx)(O.Provider,{children:n,value:{user:r,login:function(t){return a.b(t).then(v)},logout:function(){return a.c().then((function(){v(null),m.clear(),Object(d.b)()}))},register:function(t){return a.d(t).then(v)}}})},h=function(){var t=Object(o.useContext)(O);if(!t)throw new Error("useAuth\u5fc5\u987b\u5728AuthProvider\u4e2d\u4f7f\u7528");return t}}},[[408,2,3]]]);