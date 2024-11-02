(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},147:function(e,t){},149:function(e,t){},161:function(e,t){},163:function(e,t){},191:function(e,t){},193:function(e,t){},194:function(e,t){},199:function(e,t){},201:function(e,t){},221:function(e,t){},237:function(e,t){},240:function(e,t){},277:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(132),c=n.n(i),s=(n(142),n(143),n(46)),r=n(24),l=n.n(r);const d="https://todo-list.alphacamp.io/api/auth";var u=n(3),p=n(2);const h={isAuthenticated:!1,currentMember:null,regist:null,login:null,logout:null},b=Object(o.createContext)(h),j=()=>Object(o.useContext)(b),x=e=>{let{children:t}=e;const[n,a]=Object(o.useState)(!1),[i,c]=Object(o.useState)(null),{pathname:r}=Object(u.i)();return Object(o.useEffect)((()=>{(async()=>{const e=window.localStorage.getItem("authToken");if(!e)return a(!1),void c(null);const t=await(async e=>{try{return(await l.a.get(`${d}/test-token`,{headers:{Authorization:"Bearer "+e}})).data.success}catch(t){console.error(t)}})(e);if(t){a(!0);const t=s.decode(e);c(t)}else a(!1),c(null)})()}),[r]),Object(p.jsx)(b.Provider,{value:{isAuthenticated:n,currentMember:i&&{id:i.sub,name:i.name},register:async e=>{const{success:t,authToken:n}=await(async e=>{let{username:t,email:n,password:o}=e;try{const{data:e}=await l.a.post(`${d}/register`,{username:t,email:n,password:o}),{authToken:a}=e;return a?{success:!0,...e}:e}catch(a){console.error(a)}})({username:e.username,email:e.email,password:e.password}),o=s.decode(n);return o?(c(o),a(!0),localStorage.setItem("authToken",n)):(c(null),a(!1)),t},login:async e=>{const{success:t,authToken:n}=await(async e=>{let{username:t,password:n}=e;try{const{data:e}=await l.a.post(`${d}/login`,{username:t,password:n});console.log("data",e);const{authToken:o}=e;return o?{success:!0,...e}:e}catch(o){console.error("[login failed]:",o)}})({username:e.username,password:e.password}),o=s.decode(n);return o?(c(o),a(!0),localStorage.setItem("authToken",n)):(c(null),a(!1)),t},logout:()=>{localStorage.removeItem("authToken"),c(null),a(!1)}},children:t})};var g=()=>{const e=Object(u.l)(),{isAuthenticated:t}=j();return Object(o.useEffect)((()=>{e(t?"/todo":"/login")}),[e,t]),Object(p.jsx)("div",{children:"HomePage"})},f=n(7);const m=f.a.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`,v=f.a.div`
  width: 50%;
  margin-top: 30px;
`,O=f.a.button`
  border-radius: 30px;
  background-color: #ff6600;
  border: none;

  color: white;
  min-width: 300px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;

  &.hover {
    cursor: pointer;
  }
`,y=f.a.div`
  color: #0062ff;
  font-size: 16px;
  font-weight: 400;
`;var w,k,C,D;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(null,arguments)}function S(e,t){let{title:n,titleId:a,...i}=e;return o.createElement("svg",E({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?o.createElement("title",{id:a},n):null,w||(w=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),k||(k=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),C||(C=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),D||(D=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}const T=o.forwardRef(S);n.p;var z=n.p+"static/media/check-active.95ca055c.svg",N=n.p+"static/media/check-circle.30720b46.svg",$=n.p+"static/media/check-hover.5e00062b.svg";const F=f.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-bottom: 2px solid black;
`,M=f.a.label`
  font-size: 14;
  color: '#696974';
  text-align: start;
`,R=f.a.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
`;var A=e=>{let{type:t,label:n,value:o,onChange:a,placeholder:i}=e;return Object(p.jsxs)(F,{children:[Object(p.jsx)(M,{children:n}),Object(p.jsx)(R,{type:t||"text",value:o,placeholder:i,onChange:e=>{null===a||void 0===a||a(e.target.value)}})]})};const B=f.a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--major);
  padding: 0 16px;

  h3 {
    font-weight: 400;
    user-select: none;
  }
`,I=f.a.div`
  color: var(--gray);
  span {
    color: var(--major);
  }
`;var L=e=>{let{username:t}=e;return Object(p.jsxs)(B,{children:[Object(p.jsx)("h3",{children:"Tasks"}),Object(p.jsxs)(I,{children:["Hi ",Object(p.jsx)("span",{children:t})]})]})},P=n(34);const K=f.a.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 12px;
  box-shadow: 0 17px 0 -16px #e5e5e5;
  flex-wrap: wrap;

  &.active {
    box-shadow: 0 17px 0 -16px var(--major);
  }
`,V=f.a.label`
  display: inline-flex;
  font-size: 30px;
  transition: color 0.2s ease-out;
  font-weight: 300;

  &:after {
    content: '+';
  }
`,Z=f.a.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  flex: 1;
  user-select: none;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 0;
    outline: 0;
    font-size: 1rem;

    &::placeholder {
      color: var(--major);
      font-size: 13px;
    }
  }
  $.active {
    input::placeholder {
      color: var(--gray);
    }
  }
`,H=f.a.div`
  button {
    font-size: 13px;
    color: var(--major);
    padding-right: 5px;
    display: none;
  }

  &.active {
    button {
      display: block;
    }
  }
`;var J=e=>{let{inputValue:t,onChange:n,onKeyDone:o,onAddTodo:a}=e;return Object(p.jsxs)(K,{className:Object(P.a)("",{active:t.length>0}),children:[Object(p.jsx)(V,{className:"icon",htmlFor:"add-todo-input"}),Object(p.jsx)(Z,{children:Object(p.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:t,onChange:e=>{null===n||void 0===n||n(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(null===o||void 0===o||o())}})}),Object(p.jsx)(H,{className:Object(P.a)("",{active:t.length>0}),children:Object(p.jsx)("button",{className:"btn-reset",onClick:()=>{null===a||void 0===a||a()},children:"\u65b0\u589e"})})]})};const q=f.a.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 12px;
  box-shadow: 0 17px 0 -16px #e5e5e5;
  flex-wrap: wrap;

  .task-item-body-input {
    user-select: none;
    display: none;
    flex: 1;
    padding: 8px 0px;
    border: 0;
    outline: 0;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray);
      font-size: 13px;
    }
  }

  &:hover {
    background: #fff3eb;
    box-shadow: inset 0 0 0 1px #fff3eb;

    .task-item-action .btn-destroy {
      display: inline-flex;
    }
  }

  &.done {
    .task-item-body {
      color: var(--gray);
      text-decoration: line-through;
    }

    .icon-checked {
      background-image: url(${z});
    }
  }

  &.edit {
    .task-item-body-input {
      display: block;
    }
    .task-item-body-text {
      display: none;
    }
    .task-item-action {
      display: none;
    }
  }

  .task-item-checked {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .task-item-body {
    font-weight: 400;
    padding: 8px 12px;
    flex: 1;
    display: flex;
  }

  .task-item-action {
    .btn-destroy {
      display: none;
      font-size: 30px;
      transition: color 0.2s ease-out;
      font-weight: 300;
      &:after {
        content: '×';
      }
    }
  }

  .icon-checked {
    background-image: url(${N});
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
      transition: background-image 0.5s;
      background-image: url(${$});
    }
  }
`;var U=e=>{let{onSave:t,onDelete:n,onToggleDone:a,onChangeMode:i,todo:c}=e;const s=Object(o.useRef)(null);function r(e,n){s.current.value.length>0&&"Enter"===e.key&&t(n,s.current.value),"Escape"===e.key&&i({id:c.id,isEdit:!1})}return Object(p.jsxs)(q,{className:Object(P.a)("",{done:c.isDone,edit:c.isEdit}),children:[Object(p.jsx)("div",{className:"task-item-checked",children:Object(p.jsx)("span",{className:"icon icon-checked",onClick:()=>{null===a||void 0===a||a(c.id)}})}),Object(p.jsxs)("div",{className:"task-item-body",onDoubleClick:()=>{null===i||void 0===i||i({id:c.id,isEdit:!0})},children:[Object(p.jsx)("span",{className:"task-item-body-text",children:c.title}),Object(p.jsx)("input",{defaultValue:c.title,ref:s,className:"task-item-body-input",onKeyDown:e=>{null===r||void 0===r||r(e,c.id)}})]}),Object(p.jsx)("div",{className:"task-item-action",children:Object(p.jsx)("button",{className:"btn-reset btn-destroy icon",style:{border:"1px solid red"},onClick:()=>{n(c.id)}})})]})};var G=e=>{let{onSave:t,onDelete:n,onToggleDone:o,onChangeMode:a,todos:i}=e;const c=i.filter((e=>!1===e.isDelete));return Object(p.jsx)("div",{children:c.map((e=>Object(p.jsx)(U,{todo:e,onToggleDone:e=>o(e),onChangeMode:e=>{let{id:t,isEdit:n}=e;null===a||void 0===a||a({id:t,isEdit:n})},onSave:(e,n)=>{null===t||void 0===t||t(e,n)},onDelete:e=>{n(e)}},e.id)))})};const Q=f.a.footer`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  p {
    font-size: 14px;
    font-weight: 300;
    margin: 2rem 0 1rem;
  }
`,W=f.a.button`
  padding: 0;
  border: 0;
  background: none;
  vertical-align: baseline;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  outline: 0;

  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;var X=e=>{let{todos:t}=e;const n=t.filter((e=>!1===e.isDone&&!1===e.isDelete)).length,{logout:o}=j();return Object(p.jsxs)(Q,{children:[Object(p.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(p.jsx)(W,{onClick:()=>{o()},children:"\u767b\u51fa"})]})},Y=n(15),_=n(25),ee=n.n(_);var te=()=>{const[e,t]=Object(o.useState)(""),[n,a]=Object(o.useState)(""),i=Object(u.l)(),{login:c,isAuthenticated:s}=j();return Object(o.useEffect)((()=>{s&&i("/todo")}),[i,s]),Object(p.jsxs)(m,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(T,{})}),Object(p.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(p.jsx)(v,{children:Object(p.jsx)(A,{label:"\u5e33\u865f",value:e,onChange:t,placeholder:"\u8acb\u8f38\u5165\u5e33\u865f"})}),Object(p.jsx)(v,{children:Object(p.jsx)(A,{type:"password",label:"\u5bc6\u78bc",value:n,onChange:a,placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc"})}),Object(p.jsx)(O,{onClick:async()=>{if(0===e.length)return;if(0===n.length)return;await c({username:e,password:n})?ee.a.fire({position:"top",title:"\u767b\u5165\u6210\u529f\uff01",timer:1e3,icon:"success",showConfirmButton:!1}):ee.a.fire({position:"top",title:"\u767b\u5165\u5931\u6557\uff01",timer:1e3,icon:"error",showConfirmButton:!1})},children:"\u767b\u5165"}),Object(p.jsx)(Y.b,{to:"/signup",children:Object(p.jsx)(y,{children:"\u8a3b\u518a"})})]})};var ne=()=>{const[e,t]=Object(o.useState)(""),[n,a]=Object(o.useState)(""),[i,c]=Object(o.useState)(""),s=Object(u.l)(),{isAuthenticated:r,regist:l}=j();Object(o.useEffect)((()=>{r&&s("/todo")}),[s,r]);return Object(p.jsxs)(m,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(T,{})}),Object(p.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(p.jsx)(v,{children:Object(p.jsx)(A,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:t})}),Object(p.jsx)(v,{children:Object(p.jsx)(A,{label:"Email",placeholder:"\u8acb\u8f38\u5165Email",value:n,onChange:a,type:"email"})}),Object(p.jsx)(v,{children:Object(p.jsx)(A,{label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:i,onChange:c,type:"password"})}),Object(p.jsx)(O,{onClick:async()=>{if(0===e.length||0===n.length||0===i.length)return;await l({username:e,email:n,password:i})?ee.a.fire({position:"top",title:"\u8a3b\u518a\u6210\u529f\uff01",timer:1e3,icon:"success",showConfirmButton:!1}):ee.a.fire({position:"top",title:"\u8a3b\u518a\u5931\u6557\uff01",timer:1e3,icon:"error",showConfirmButton:!1})},children:"\u8a3b\u518a"}),Object(p.jsx)(Y.b,{to:"/login",children:Object(p.jsx)(y,{children:"\u53d6\u6d88"})})]})};const oe="https://todo-list.alphacamp.io/api",ae=l.a.create({baseURL:oe});ae.interceptors.request.use((e=>{const t=window.localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>{console.error(e)}));const ie=async e=>{const{id:t,title:n,isDone:o}=e;try{return(await ae.patch(`${oe}/todos/${t}`,{title:n,isDone:o})).data}catch(a){console.error("[patch todo failed]:",a)}};var ce=()=>{const[e,t]=Object(o.useState)(""),[n,a]=Object(o.useState)([]),i=Object(u.l)(),{isAuthenticated:c,currentMember:s}=j();const r=async()=>{if(0!==e.length)try{const n=await(async e=>{try{const{title:t,isDone:n}=e;return(await ae.post(`${oe}/todos`,{title:t,isDone:n})).data}catch(t){console.error("[create todo failed:]",t)}})({title:e,isDone:!1});a((e=>[...e,{id:n.id,title:n.title,isDone:n.isDone,isDelete:!1}])),t("")}catch(n){console.error(n)}};return Object(o.useEffect)((()=>{console.log("ue");(async()=>{try{const e=await(async()=>{try{return(await ae.get(`${oe}/todos`)).data.data}catch(e){console.error("[get todos failed]:",e)}})();console.log("uetodos",e);const t=e.map((e=>({...e,isEdit:!1,isDelete:!1})));console.log("newtd",t),a(t)}catch(e){console.log(e)}})()}),[]),Object(o.useEffect)((()=>{c||i("/login")}),[i,c]),Object(p.jsxs)("div",{children:["TodoPage",Object(p.jsx)(L,{username:null===s||void 0===s?void 0:s.name}),Object(p.jsx)(J,{inputValue:e,onChange:function(e){t(e)},onAddTodo:r,onKeyDone:r}),Object(p.jsx)(G,{todos:n,onToggleDone:async e=>{const t=n.find((t=>t.id===e));try{await ie({id:e,isDone:!t.isDone}),a(n.map((t=>t.id===e?{...t,isDone:!t.isDone}:t)))}catch(o){console.error(o)}},onChangeMode:function(e){let{id:t,isEdit:o}=e;a(n.map((e=>e.id===t?{...e,isEdit:o}:{...e,isEdit:!1})))},onSave:async(e,t)=>{try{await ie({id:e,title:t}),a(n.map((n=>n.id===e?{...n,title:t,isEdit:!1}:n)))}catch(o){console.error(o)}},onDelete:async e=>{try{await(async e=>{try{return(await ae.delete(`${oe}/todos/${e}`)).data}catch(t){console.error("[delete todo failed]:",t)}})(e);const t=n.map((t=>t.id===e?{...t,isDelete:!0}:t));a(t)}catch(t){console.error(t)}}}),Object(p.jsx)(X,{todos:n})]})};var se=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(Y.a,{children:Object(p.jsx)(x,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"login",element:Object(p.jsx)(te,{})}),Object(p.jsx)(u.a,{path:"todo",element:Object(p.jsx)(ce,{})}),Object(p.jsx)(u.a,{path:"signup",element:Object(p.jsx)(ne,{})}),Object(p.jsx)(u.a,{path:"*",element:Object(p.jsx)(g,{})})]})})})})};var re=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,278)).then((t=>{let{getCLS:n,getFID:o,getFCP:a,getLCP:i,getTTFB:c}=t;n(e),o(e),a(e),i(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(se,{})})),re()}},[[277,1,2]]]);
//# sourceMappingURL=main.095d1a88.chunk.js.map