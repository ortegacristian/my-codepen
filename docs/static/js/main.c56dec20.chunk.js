(this.webpackJsonpmycodepen=this.webpackJsonpmycodepen||[]).push([[0],{38:function(e,n,t){},459:function(e,n,t){},460:function(e,n,t){},461:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t(25),r=t.n(s),i=t(16),c=t(2),o=t(12),d=t(11),l=t(17),j=t(0),m=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a.useState)(e),t=Object(o.a)(n,2),s=t[0],r=t[1];return[s,function(e){var n=e.target;r(Object(l.a)(Object(l.a)({},s),{},Object(d.a)({},n.name,n.value)))},function(){r(e)}]}({searchPen:""}),n=Object(o.a)(e,2),t=n[0],s=n[1],r=Object(c.g)(),i=t.searchPen;return Object(j.jsx)("div",{className:"searcherBar",children:Object(j.jsx)("div",{className:"searcherExpander",children:Object(j.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),r.push("/search/pens?q=".concat(i))},children:Object(j.jsxs)("label",{className:"search-input-label",children:[Object(j.jsx)("i",{className:"zmdi zmdi-search"}),Object(j.jsx)("input",{type:"text",placeholder:"Search CodePen...",className:"search-input",name:"searchPen",autoComplete:"off",value:i,onChange:s})]})})})})},h=[{id:1,name:"Loader CSS",owner:{name:"Cristian",lastName:"Ortega",username:"cristianortega"},previewImage:"./assets/previewLoaderCSS.gif",html:'<div class="spinner-css">\n    <span class="side sp_left">\n        <span class="fill"></span>\n    </span>\n    <span class="side sp_right">\n        <span class="fill"></span>\n    </span>\n</div>',css:'body {\n    background-color: white;\n}\n.spinner-css {\n    margin: -50px 0 0 -50px;\n    height: 100px;\n    width: 100px;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n}\n.spinner-css:after {\n    content: "";\n    position: absolute;\n    width: 87px;\n    height: 87px;\n    left: 0px;\n    top: 0px;\n    margin: 6.5px;\n    background: #fff;\n    opacity: 1;\n    border-radius: 999px;\n    -webkit-border-radius: 999px;\n    -moz-border-radius: 999px;\n}\n.spinner-css .side {\n    height: 100px;\n    width: 50px;\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n}\n.spinner-css .side > .fill {\n    position: absolute;\n    width: 50px;\n    height: 100px;\n    background: #09c;\n    border-radius: 999px;\n    -webkit-border-radius: 999px;\n    -moz-border-radius: 999px;\n    animation: cssSpinnerRight 2s infinite linear;\n    -webkit-animation: cssSpinnerRight 2s infinite linear;\n    -moz-animation: cssSpinnerRight 2s infinite linear;\n    -o-animation: cssSpinnerRight 2s infinite linear;\n}\n.spinner-css .side.sp_right {\n    left: 50px;\n    border-radius: 0px 999px 999px 0px;\n    -webkit-border-radius: 0px 999px 999px 0px;\n    -moz-border-radius: 0px 999px 999px 0px;\n}\n.spinner-css .side.sp_right > .fill {\n    right: 0;\n    border-right: 50px solid #fff;\n}\n.spinner-css .side.sp_left {\n    left: 0;\n    border-radius: 999px 0px 0px 999px;\n    -webkit-border-radius: 999px 0px 0px 999px;\n    -moz-border-radius: 999px 0px 0px 999px;\n}\n.spinner-css .side.sp_left > .fill {\n    left: 0;\n    border-left: 50px solid #fff;\n    animation: cssSpinnerLeft 2s infinite linear;\n    -webkit-animation: cssSpinnerLeft 2s infinite linear;\n    -moz-animation: cssSpinnerLeft 2s infinite linear;\n    -o-animation: cssSpinnerLeft 2s infinite linear;\n}\n@-webkit-keyframes cssSpinnerRight {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    20% {\n        -webkit-transform: rotate(90deg);\n    }\n    25% {\n        -webkit-transform: rotate(180deg);\n    }\n    50% {\n        -webkit-transform: rotate(180deg);\n    }\n    70% {\n        -webkit-transform: rotate(270deg);\n    }\n    75% {\n        -webkit-transform: rotate(360deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@-webkit-keyframes cssSpinnerLeft {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    25% {\n        -webkit-transform: rotate(0deg);\n    }\n    35% {\n        -webkit-transform: rotate(90deg);\n    }\n    50% {\n        -webkit-transform: rotate(180deg);\n    }\n    75% {\n        -webkit-transform: rotate(180deg);\n    }\n    80% {\n        -webkit-transform: rotate(270deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@-moz-keyframes cssSpinnerRight {\n    0% {\n        -moz-transform: rotate(0deg);\n    }\n    20% {\n        -moz-transform: rotate(90deg);\n    }\n    25% {\n        -moz-transform: rotate(180deg);\n    }\n    50% {\n        -moz-transform: rotate(180deg);\n    }\n    70% {\n        -moz-transform: rotate(270deg);\n    }\n    75% {\n        -moz-transform: rotate(360deg);\n    }\n    100% {\n        -moz-transform: rotate(360deg);\n    }\n}\n@-moz-keyframes cssSpinnerLeft {\n    0% {\n        -moz-transform: rotate(0deg);\n    }\n    25% {\n        -moz-transform: rotate(0deg);\n    }\n    35% {\n        -moz-transform: rotate(90deg);\n    }\n    50% {\n        -moz-transform: rotate(180deg);\n    }\n    75% {\n        -moz-transform: rotate(180deg);\n    }\n    80% {\n        -moz-transform: rotate(270deg);\n    }\n    100% {\n        -moz-transform: rotate(360deg);\n    }\n}\n@-o-keyframes cssSpinnerRight {\n    0% {\n        -o-transform: rotate(0deg);\n    }\n    20% {\n        -o-transform: rotate(90deg);\n    }\n    25% {\n        -o-transform: rotate(180deg);\n    }\n    50% {\n        -o-transform: rotate(180deg);\n    }\n    70% {\n        -o-transform: rotate(270deg);\n    }\n    75% {\n        -o-transform: rotate(360deg);\n    }\n    100% {\n        -o-transform: rotate(360deg);\n    }\n}\n@-o-keyframes cssSpinnerLeft {\n    0% {\n        -o-transform: rotate(0deg);\n    }\n    25% {\n        -o-transform: rotate(0deg);\n    }\n    35% {\n        -o-transform: rotate(90deg);\n    }\n    50% {\n        -o-transform: rotate(180deg);\n    }\n    75% {\n        -o-transform: rotate(180deg);\n    }\n    80% {\n        -o-transform: rotate(270deg);\n    }\n    100% {\n        -o-transform: rotate(360deg);\n    }\n}\n@keyframes cssSpinnerRight {\n    0% {\n        transform: rotate(0deg);\n    }\n    20% {\n        transform: rotate(90deg);\n    }\n    25% {\n        transform: rotate(180deg);\n    }\n    50% {\n        transform: rotate(180deg);\n    }\n    70% {\n        transform: rotate(270deg);\n    }\n    75% {\n        transform: rotate(360deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes cssSpinnerLeft {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(0deg);\n    }\n    35% {\n        transform: rotate(90deg);\n    }\n    50% {\n        transform: rotate(180deg);\n    }\n    75% {\n        transform: rotate(180deg);\n    }\n    80% {\n        transform: rotate(270deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}',js:""},{id:2,name:"Media Card Glassmorphism",owner:{name:"Cristian",lastName:"Ortega",username:"cristianortega"},previewImage:"./assets/previewMediaCardGlassmorphism.gif",html:"<div class=\"container\">\n    <div class='card'>\n        <div class='content'>\n            <h2>01</h2>\n            <h3>Card one</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus eros.</p>\n            <a href=\"/\">Read More</a>\n        </div>\n    </div>\n</div>",css:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 1200px;\n    flex-wrap: wrap;\n    z-index: 1;\n    width: fit-content !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    background: none !important;\n    border-radius: 0 !important;\n    color: inherit !important;\n}\n\n.container .card {\n    position: relative;\n    width: 280px;\n    height: 400px;\n    margin: 30px;\n    box-shadow: 10px 14px 20px rgb(0 0 0 / 50%);\n    border-radius: 15px;\n    background: rgba(255,255,255,0.1);\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top: 1px solid rgba(255,255,255,0.5);\n    border-left: 1px solid rgba(255,255,255,0.5);\n    backdrop-filter: blur(5px);\n}\n\n.container .card .content {\n    padding: 20px;\n    text-align: center;\n    transform: translateY(100px);\n    opacity: 0;\n    transition: 0.5s;\n}\n\n.container .card:hover .content {\n    transform: translateY(0px);\n    opacity: 1;\n}\n\n.container .card .content h2 {\n    position: absolute;\n    top: -80px;\n    right: 30px;\n    font-size: 8em;\n    color: rgba(255, 255, 255, 0.05);\n    pointer-events: none;\n}\n\n.container .card .content h3 {\n    font-size: 1.8em;\n    color: #fff;\n    z-index: 1;\n}\n\n.container .card .content p {\n    font-size: 1em;\n    color: #fff;\n    font-weight: 300;\n}\n\n.container .card .content a {\n    position: relative;\n    display: inline-block;\n    padding: 8px 20px;\n    margin-top: 15px;\n    background: #fff;\n    color: #000;\n    border-radius: 20px;\n    text-decoration: none;\n    font-weight: 500;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}",js:'\nVanillaTilt.init(document.querySelector(".card"), {\n    reverse: true,\n    max: 20,\n    speed: 5000\n});\n\nVanillaTilt.init(document.querySelectorAll(".card"));'},{id:3,name:"Codepen 3",owner:{name:"Cristian",lastName:"Ortega",username:"cristianortega"},previewImage:"",component:"LoaderCSS",html:"",css:"",js:""},{id:4,name:"Codepen 4",owner:{name:"Cristian",lastName:"Ortega",username:"cristianortega"},previewImage:"",component:"LoaderCSS",html:"",css:"",js:""},{id:5,name:"Codepen 5",owner:{name:"Cristian",lastName:"Ortega",username:"cristianortega"},previewImage:"",component:"LoaderCSS",html:"",css:"",js:""}],p=function(e){var n=e.data,t=n.id,a=n.name,s=n.owner,r=n.previewImage;return Object(j.jsxs)("article",{className:"grid-item",children:[Object(j.jsxs)("header",{className:"grid-item-header",children:[Object(j.jsx)("a",{href:"/".concat(s.username),className:"avatar-link",children:Object(j.jsx)("img",{alt:"Profile for ".concat(s.name," ").concat(s.lastName),src:"",className:"avatar-image"})}),Object(j.jsxs)("div",{className:"titleAndAuthor",children:[Object(j.jsx)("h2",{className:"title",children:Object(j.jsx)("a",{href:"/".concat(s.username,"/pen/").concat(t),children:a})}),Object(j.jsx)("address",{className:"author",children:Object(j.jsxs)("a",{href:"/".concat(s.username),className:"authorName",children:[s.name," ",s.lastName]})})]})]}),Object(j.jsx)("div",{className:"thumbnail",children:Object(j.jsx)("a",{className:"cover-link",href:"/".concat(s.username,"/pen/").concat(t),children:Object(j.jsx)("img",{className:"preview-image",alt:"".concat(a),src:"".concat(r)})})})]})},b=function(){return Object(j.jsxs)("div",{className:"PaginationContainer",children:[Object(j.jsx)("section",{className:"homepage-grid",children:Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Encuentra inspiraci\xf3n de miles de dise\xf1os."}),Object(j.jsx)("p",{children:"Explora los miles de dise\xf1os y usalos a conveniencia bajo licencia CC BY-SA 4.0."})]}),h.map((function(e,n){return Object(j.jsx)(p,{data:e},"codepencard-".concat(e.id))}))]})}),Object(j.jsx)("nav",{className:"pagination",children:Object(j.jsxs)("button",{className:"pagination-button",children:["Next",Object(j.jsx)("img",{src:"./assets/icons/rightArrow.svg",alt:"Next"})]})})]})},x=t(27),f=t.n(x),g=function(e){var n=e.src,t=e.name;return Object(j.jsx)(f.a,{className:"topic-card-container",options:{glare:!0,speed:400,max:35},children:Object(j.jsx)("a",{href:"/topic/".concat(n),className:"topic",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:"./assets/topics/".concat(n,".svg"),alt:"".concat(t.toUpperCase()," Logo")}),Object(j.jsx)("h3",{children:t})]})})})})},u=function(){return Object(j.jsx)("section",{className:"topics",children:Object(j.jsx)("div",{className:"width-wrapper",children:Object(j.jsxs)("div",{className:"topic-wrapper",children:[Object(j.jsx)("div",{className:"explore-topics",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Empieza enseguida"}),Object(j.jsx)("p",{children:"Insp\xedrate con los ejemplos utilizando frameworks, librerias y patrones de dise\xf1o."}),Object(j.jsx)("a",{href:"/topics/",className:"text-button",children:"Explorar m\xe1s temas"})]})}),Object(j.jsx)(g,{src:"html-5",name:"Html 5"}),Object(j.jsx)(g,{src:"javascript",name:"Javascript"}),Object(j.jsx)(g,{src:"css",name:"CSS"}),Object(j.jsx)(g,{src:"sass",name:"Sass"}),Object(j.jsx)(g,{src:"ui-patterns",name:"UI Patterns"})]})})})},O=function(){return Object(j.jsx)("section",{className:"aboutMe",children:Object(j.jsx)("div",{className:"width-wrapper",children:Object(j.jsxs)("div",{className:"about-me-wrapper",children:[Object(j.jsxs)("div",{className:"about-me-description",children:[Object(j.jsx)("h2",{children:"\xbfQuien soy?"}),Object(j.jsx)("p",{children:"(Por escribir)"}),Object(j.jsx)("a",{href:"/about/me",className:"about-me-button","data-color":"green",children:"Conoceme!"})]}),Object(j.jsx)("h3",{children:"Algunas de las herramientas y tecnolog\xedas con las que suelo trabajar:"}),Object(j.jsxs)("div",{className:"about-me-logos",children:[Object(j.jsx)("img",{src:"/",alt:"Html"}),Object(j.jsx)("img",{src:"/",alt:"Javascript"}),Object(j.jsx)("img",{src:"/",alt:"Css"}),Object(j.jsx)("img",{src:"",alt:"jQuery"}),Object(j.jsx)("img",{src:"",alt:"React"}),Object(j.jsx)("img",{src:"/",alt:"C#"}),Object(j.jsx)("img",{src:"/",alt:"Node.js"}),Object(j.jsx)("img",{src:"/",alt:"SQL"}),Object(j.jsx)("img",{src:"/",alt:"MongoDB"})]})]})})})},v=function(){return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"width-wrapper",id:"link-footer-width-wrapper",children:[Object(j.jsxs)("nav",{id:"link-footer-codepen-links",children:[Object(j.jsx)("h4",{children:"Website"}),Object(j.jsx)("a",{href:"/about/",children:"About"}),Object(j.jsx)("a",{href:"/documentation/",children:"Documentation"})]}),Object(j.jsxs)("nav",{id:"link-footer-social-links","aria-label":"Social Media",children:[Object(j.jsx)("h4",{children:"Social"}),Object(j.jsx)("a",{href:"/",children:"Twitter"}),Object(j.jsx)("a",{href:"/",children:"Instagram"})]}),Object(j.jsxs)("nav",{id:"link-footer-community-links","aria-label":"Community",children:[Object(j.jsx)("h4",{children:"Community"}),Object(j.jsx)("a",{href:"/news/",children:"News"}),Object(j.jsx)("a",{href:"/topics/",children:"Topics"})]}),Object(j.jsxs)("div",{className:"footer-copyright",id:"link-footer-copyright",children:[Object(j.jsx)("h1",{"data-component":"Logo","data-test-id":"logo",children:Object(j.jsx)("a",{href:"/",className:"logo",children:"(A\xf1adir Logo)"})}),Object(j.jsx)("p",{children:"\xa92021 By Cristian Ortega"}),Object(j.jsxs)("p",{className:"SiteFooterStyles_links--YkLv",children:[Object(j.jsx)("a",{href:"/terms-of-service/",children:"Terms of Service"})," \xb7 ",Object(j.jsx)("a",{href:"/privacy-policy/",children:"Privacy Policy"})]})]})]})})},w=(t(38),function(e){return document.body.classList.add(e)}),N=function(e){return document.body.classList.remove(e)};function k(e){Object(a.useEffect)((function(){return e instanceof Array?e.map(w):w(e),function(){e instanceof Array?e.map(N):N(e)}}),[e])}var y=function(){return k("page-homepage"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(b,{}),Object(j.jsx)(u,{}),Object(j.jsx)(O,{}),Object(j.jsx)(v,{})]})},C=function(e){return h.find((function(n){return n.id.toString()===e.toString()}))},z=function(){var e=Object(c.h)().penId,n=C(e).name;return Object(j.jsx)("header",{className:"pen-main-header",children:Object(j.jsxs)("div",{className:"header-wrap",children:[Object(j.jsx)("h1",{className:"logo",children:Object(j.jsx)("a",{href:"/",children:"(A\xf1adir Logo)"})}),Object(j.jsx)("div",{className:"pen-title-wrapper",children:Object(j.jsxs)("div",{className:"pen-title-text",children:[Object(j.jsx)("h1",{className:"pen-title",children:Object(j.jsx)("a",{href:"/cristianortega/pen/1",className:"pen-title-link",title:"".concat(n),children:n})}),Object(j.jsx)("div",{className:"pen-title-owner",children:Object(j.jsx)("a",{className:"pen-title-owner-link",href:"/cristianortega",children:"Cristian Ortega"})})]})}),Object(j.jsx)("div",{className:"navigation-wrap editor-actions-menu",children:Object(j.jsx)("div",{className:"editor-actions",children:Object(j.jsxs)("span",{className:"viewSwitcher",children:[Object(j.jsx)("button",{title:"Change View",className:"view-switcher-button",children:Object(j.jsx)("svg",{viewBox:"0 0 20 20",className:"EditorHeaderViewSwitcher_iconPen-1Mc1B",children:Object(j.jsx)("path",{d:"M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"})})}),Object(j.jsx)("div",{className:"dropdownContentWrapper",children:Object(j.jsxs)("div",{className:"dropdownContent",children:[Object(j.jsx)("h3",{children:"Change View"}),Object(j.jsxs)("div",{className:"view-switcher-layout",children:[Object(j.jsxs)("button",{id:"left-layout","data-layout-type":"left",className:"layout-change-icon",children:[Object(j.jsx)("span",{className:"screen-reader-text",children:"Use Left Layout"}),Object(j.jsx)("svg",{viewBox:"0 0 20 20",className:"editor-left rotate-cc90",width:"20",height:"20",children:Object(j.jsx)("path",{d:"M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"})})]}),Object(j.jsxs)("button",{id:"top-layout","data-layout-type":"top",className:"layout-change-icon",children:[Object(j.jsx)("span",{className:"screen-reader-text",children:"Use Top Layout"}),Object(j.jsx)("svg",{viewBox:"0 0 20 20",className:"new-pen",width:"20",height:"20",children:Object(j.jsx)("path",{d:"M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"})})]}),Object(j.jsxs)("button",{id:"right-layout","data-layout-type":"right",className:"layout-change-icon",children:[Object(j.jsx)("span",{className:"screen-reader-text",children:"Use Right Layout"}),Object(j.jsx)("svg",{viewBox:"0 0 20 20",className:"editor-right rotate-c90",width:"20",height:"20",children:Object(j.jsx)("path",{d:"M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"})})]})]}),Object(j.jsx)("div",{className:"EditorHeaderViewSwitcher_switch-1nHOd",children:Object(j.jsxs)("nav",{className:"EditorHeaderViewSwitcherLinks_linkList-2LwWe",children:[Object(j.jsxs)("a",{className:"EditorHeaderViewSwitcherLink_link-1WfWP editor-link pen-link active",href:"/noahraskin/pen/xxdWqRp",id:"pen-link",children:["Editor View",Object(j.jsxs)("span",{className:"EditorHeaderViewSwitcherLink_linkMeta-63jt2",children:["/pen/",Object(j.jsx)("span",{"data-href":"https://blog.codepen.io/documentation/views/editor-view/",className:"EditorHeaderViewSwitcherLink_learnMore-38FPT",children:Object(j.jsx)("svg",{viewBox:"0 0 100 100",width:"13",height:"13",children:Object(j.jsx)("path",{d:"M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"})})})]})]}),Object(j.jsxs)("a",{className:"EditorHeaderViewSwitcherLink_link-1WfWP editor-link details-link",href:"/noahraskin/details/xxdWqRp",id:"details-link",children:["Details View",Object(j.jsxs)("span",{className:"EditorHeaderViewSwitcherLink_linkMeta-63jt2",children:["/details/",Object(j.jsx)("span",{"data-href":"https://blog.codepen.io/documentation/views/details-view/",className:"EditorHeaderViewSwitcherLink_learnMore-38FPT",children:Object(j.jsx)("svg",{viewBox:"0 0 100 100",width:"13",height:"13",children:Object(j.jsx)("path",{d:"M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"})})})]})]}),Object(j.jsxs)("a",{className:"EditorHeaderViewSwitcherLink_link-1WfWP editor-link full-link",href:"/noahraskin/full/xxdWqRp",id:"full-link",children:["Full Page View",Object(j.jsxs)("span",{className:"EditorHeaderViewSwitcherLink_linkMeta-63jt2",children:["/full/",Object(j.jsx)("span",{"data-href":"https://blog.codepen.io/documentation/views/full-page-view/",className:"EditorHeaderViewSwitcherLink_learnMore-38FPT",children:Object(j.jsx)("svg",{viewBox:"0 0 100 100",width:"13",height:"13",children:Object(j.jsx)("path",{d:"M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"})})})]})]})]})})]})})]})})})]})})},S=function(e){var n=null;switch(e){case"html":n=Object(j.jsxs)("svg",{viewBox:"0 0 15 15",className:"file-type-icon",id:"icon-file-html",children:[Object(j.jsx)("rect",{fill:"#FF3C41",width:"15",height:"15",rx:"4"}),Object(j.jsx)("path",{d:"M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574",fill:"#28282B"})]});break;case"css":n=Object(j.jsxs)("svg",{viewBox:"0 0 15 15",className:"file-type-icon",children:[Object(j.jsx)("rect",{fill:"#0EBEFF",width:"15",height:"15",rx:"4"}),Object(j.jsx)("path",{d:"M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z",fill:"#282828"})]});break;case"js":n=Object(j.jsxs)("svg",{viewBox:"0 0 15 15",className:"file-type-icon",children:[Object(j.jsx)("rect",{fill:"#FCD000",width:"15",height:"15",rx:"4"}),Object(j.jsx)("path",{d:"M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z",fill:"#282828"})]})}return n},L=function(e){var n=e.type;return Object(j.jsx)("div",{className:"editor-resizer ".concat(n,"-editor-resizer"),children:Object(j.jsxs)("h2",{className:"box-title ".concat(n,"-editor-title box-title--resizer"),children:[S(n),Object(j.jsxs)("span",{className:"box-title-name",children:[" ",n.toUpperCase()," "]}),Object(j.jsx)("span",{className:"box-title-preprocessor-name"})]})})},V=t(28),H=t.n(V),A=(t(44),function(e){var n=e.type,t=e.value,a=e.mode;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{type:n}),Object(j.jsxs)("div",{className:"box box-".concat(n),children:[Object(j.jsxs)("div",{className:"powers",children:[Object(j.jsx)("div",{className:"powers-drag-handle"}),Object(j.jsx)("div",{className:"editor-actions-left",children:Object(j.jsxs)("h2",{className:"box-title ".concat(n,"-editor-title"),children:[S(n),Object(j.jsxs)("span",{className:"box-title-name",children:[" ",n.toUpperCase()," "]}),Object(j.jsx)("span",{className:"box-title-preprocessor-name"})]})})]}),Object(j.jsx)(H.a,{className:"code-wrap",height:"",width:"",fontSize:"",name:"".concat(n,"_editor"),mode:a,theme:"monokai",onChange:function(e){console.log("change",e)},value:t,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,printMargin:!1}})]})]})}),M=function(){var e=Object(c.h)().penId,n=C(e),t=n.html,a=n.css,s=n.js;return Object(j.jsx)("div",{className:"page-wrap",children:Object(j.jsxs)("div",{className:"boxes",children:[Object(j.jsxs)("div",{className:"boxes-editor",children:[Object(j.jsx)(A,{type:"html",value:t,mode:"html"}),Object(j.jsx)(A,{type:"css",value:a,mode:"css"}),Object(j.jsx)(A,{type:"js",value:s,mode:"javascript"})]}),Object(j.jsx)("div",{className:"resizer"}),Object(j.jsx)("div",{className:"output-container",children:Object(j.jsx)("div",{className:"output-sizer",children:Object(j.jsx)("div",{className:"result",children:Object(j.jsx)("iframe",{src:"/cristianortega/full/".concat(e),className:"result-iframe",title:"pen-content"})})})})]})})},E=function(){return Object(j.jsx)("div",{})},_=(t(459),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z,{}),Object(j.jsx)(M,{}),Object(j.jsx)(E,{})]})}),B=function(){var e=Object(c.h)().penId,n=C(e);Object(a.useEffect)((function(){if(!n)return Object(j.jsx)(c.a,{to:"/"});var e=n.js;new Function(e)()}),[n]);var t=n.html,s=n.css,r="<style>".concat(s,"</style>").concat(t);return k("page-full-pen"),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})},P=function(){return Object(j.jsx)("div",{})},I=function(e){e.match;return Object(j.jsx)(i.a,{children:Object(j.jsxs)(c.d,{children:[Object(j.jsx)(c.b,{exact:!0,path:"/",component:y}),Object(j.jsx)(c.b,{path:"/:userId/pen/:penId",component:_}),Object(j.jsx)(c.b,{path:"/:userId/full/:penId",component:B}),Object(j.jsx)(c.b,{path:"/search/pens?",component:P})]})})},F=function(){return Object(j.jsx)(I,{})};t(460);r.a.render(Object(j.jsx)(F,{}),document.getElementById("mycodepen-page"))}},[[461,1,2]]]);
//# sourceMappingURL=main.c56dec20.chunk.js.map