"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1846],{48991:(n,c,e)=>{e.r(c),e.d(c,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=e(85893),h=e(11151);const a={title:"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module",description:"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )",slug:"lam-cach-nao-de-sua-doi-thu-vien-trong-node-module",authors:["thang"],tags:["javascript","nodejs"],image:"https://images.viblo.asia/35468773-2fcb-4363-8ac0-52a6a00f2f07.jpg",hide_table_of_contents:!1},i=void 0,o={permalink:"/blog/lam-cach-nao-de-sua-doi-thu-vien-trong-node-module",source:"@site/blog/2023-12-22-sua-trong-node-module/index.md",title:"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module",description:"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )",date:"2023-12-22T00:00:00.000Z",formattedDate:"22 th\xe1ng 12, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:3.05,hasTruncateMarker:!0,authors:[{name:"Ph\u1ea1m Quy\u1ebft Th\u1eafng",title:"Fullstack developer",url:"https://github.com/phamquyetthang",imageURL:"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4",key:"thang"}],frontMatter:{title:"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module",description:"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )",slug:"lam-cach-nao-de-sua-doi-thu-vien-trong-node-module",authors:["thang"],tags:["javascript","nodejs"],image:"https://images.viblo.asia/35468773-2fcb-4363-8ac0-52a6a00f2f07.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"React - Upload \u1ea3nh v\xe0 video trong rich text editor",permalink:"/blog/react-upload-anh-va-video-trong-rich-text-editor"}},s={authorsImageUrls:[void 0]},d=[{value:"1. Khi c\u1ea7n fix th\u01b0 vi\u1ec7n t\u1eeb npm:",id:"1-khi-c\u1ea7n-fix-th\u01b0-vi\u1ec7n-t\u1eeb-npm",level:2},{value:"V\u1eady l\xe0m c\xe1ch n\xe0o \u0111\u1ec3 t\u1ef1 m\xecnh s\u1eeda th\u01b0 vi\u1ec7n v\xe0 kh\xf4ng b\u1ecb m\u1ea5t \u0111i n\u1ebfu x\xf3a node_module",id:"v\u1eady-l\xe0m-c\xe1ch-n\xe0o-\u0111\u1ec3-t\u1ef1-m\xecnh-s\u1eeda-th\u01b0-vi\u1ec7n-v\xe0-kh\xf4ng-b\u1ecb-m\u1ea5t-\u0111i-n\u1ebfu-x\xf3a-node_module",level:3},{value:"2.C\xe1c c\xe1ch s\u1eeda th\u01b0 vi\u1ec7n trong node_modules",id:"2c\xe1c-c\xe1ch-s\u1eeda-th\u01b0-vi\u1ec7n-trong-node_modules",level:2},{value:"C\xe1ch 1: Fork repo c\u1ee7a package",id:"c\xe1ch-1-fork-repo-c\u1ee7a-package",level:3},{value:"C\xe1ch 2: S\u1eed d\u1ee5ng patch-package",id:"c\xe1ch-2-s\u1eed-d\u1ee5ng-patch-package",level:3},{value:"3. Demo:",id:"3-demo",level:2}];function l(n){const c={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,h.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.p,{children:"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )"}),"\n",(0,t.jsx)(c.h2,{id:"1-khi-c\u1ea7n-fix-th\u01b0-vi\u1ec7n-t\u1eeb-npm",children:"1. Khi c\u1ea7n fix th\u01b0 vi\u1ec7n t\u1eeb npm:"}),"\n",(0,t.jsxs)(c.p,{children:["\u0110\u1ed1i v\u1edbi c\xe1c anh em ng\u01b0\u1eddi ch\u01a1i h\u1ec7 js , th\xec ch\u1eafc \u0111\u1ec1u kh\xf4ng l\u1ea1 l\u1eabm g\xec v\u1edbi vi\u1ec7c c\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n c\u1ee7a b\xean th\u1ee9 ba qua c\xe2u l\u1ec7nh\n",(0,t.jsx)(c.code,{children:"npm install <package name>"})," ( ho\u1eb7c yarn )"]}),"\n",(0,t.jsx)(c.p,{children:"C\xe1c th\u01b0 vi\u1ec7n n\xe0y sau khi \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t s\u1ebd n\u1eb1m trong node module v\xe0 t\xf4i v\xe0 c\xe1c b\u1ea1n ch\u1ec9 vi\u1ec7c l\u1ea5y ra s\u1eed d\u1ee5ng."}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.img,{src:e(9370).Z+"",width:"486",height:"330"})}),"\n",(0,t.jsx)(c.p,{children:"Nh\u1eefng g\xec c\xf3 trong node_module ch\xfang ta kh\xf4ng c\u1ea7n thi\u1ebft ph\u1ea3i bi\u1ebft g\u1ed3m nh\u1eefng g\xec."}),"\n",(0,t.jsx)(c.p,{children:"Node_module c\xf3 khi c\xf2n l\xe0 v\xf9ng c\u1ea5m kh\xf4ng ai mu\u1ed1n \u0111\u1ee5ng v\xe0o."}),"\n",(0,t.jsx)(c.p,{children:"X\xf3a node_module v\xe0 c\xe0i l\u1ea1i c\u0169ng l\xe0 1 trong nh\u1eefng gi\u1ea3i ph\xe1p t\xe2m linh ch\u1eafc ch\u1eafn b\u1ea1n t\u1eebng s\u1eed d\u1ee5ng \u0111\u1ec3 fix bug trong tuy\u1ec7t vong."}),"\n",(0,t.jsx)(c.p,{children:"V\u1ea5n \u0111\u1ec1 ph\xe1t sinh khi ch\xfang ta ph\xe1t hi\u1ec7n 1 issues c\u1ee7a th\u01b0 vi\u1ec7n kh\xf4ng nh\u01b0 ch\xfang ta mong mu\u1ed1n nh\u01b0ng kh\xf4ng mu\u1ed1n t\xecm th\u01b0 vi\u1ec7n kh\xe1c \u0111\u1ec3 thay th\u1ebf."}),"\n",(0,t.jsx)(c.h3,{id:"v\u1eady-l\xe0m-c\xe1ch-n\xe0o-\u0111\u1ec3-t\u1ef1-m\xecnh-s\u1eeda-th\u01b0-vi\u1ec7n-v\xe0-kh\xf4ng-b\u1ecb-m\u1ea5t-\u0111i-n\u1ebfu-x\xf3a-node_module",children:"V\u1eady l\xe0m c\xe1ch n\xe0o \u0111\u1ec3 t\u1ef1 m\xecnh s\u1eeda th\u01b0 vi\u1ec7n v\xe0 kh\xf4ng b\u1ecb m\u1ea5t \u0111i n\u1ebfu x\xf3a node_module"}),"\n",(0,t.jsx)(c.p,{children:"Ch\xfang ta c\xf3 nh\u1eefng c\xe1ch sau \u0111\xe2y:"}),"\n",(0,t.jsx)(c.h2,{id:"2c\xe1c-c\xe1ch-s\u1eeda-th\u01b0-vi\u1ec7n-trong-node_modules",children:"2.C\xe1c c\xe1ch s\u1eeda th\u01b0 vi\u1ec7n trong node_modules"}),"\n",(0,t.jsx)(c.h3,{id:"c\xe1ch-1-fork-repo-c\u1ee7a-package",children:"C\xe1ch 1: Fork repo c\u1ee7a package"}),"\n",(0,t.jsx)(c.p,{children:"B\u1ea1n c\xf3 th\u1ec3 v\xe0o source code c\u1ee7a package \u0111\xf3, fork v\u1ec1 git c\u1ee7a m\xecnh m\u1ed9t b\u1ea3n , s\u1eeda \u0111\u1ed5i n\xf3 sau \u0111\xf3 s\u1eeda."}),"\n",(0,t.jsxs)(c.p,{children:["Sau \u0111\xf3 khai b\xe1o n\xf3 v\xe0o trong package.json:\nV\xed d\u1ee5 nh\u01b0 n\xe0y\n",(0,t.jsx)(c.img,{alt:"image.png",src:e(1282).Z+"",width:"921",height:"110"})]}),"\n",(0,t.jsxs)(c.p,{children:["Thay s\u1ed1 phi\xean b\u1ea3n c\u1ee7a package b\u1eb1ng \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ebfn repo c\u1ee7a b\u1ea1n theo d\u1ea1ng ",(0,t.jsx)(c.code,{children:"git+{repo}"})]}),"\n",(0,t.jsx)(c.p,{children:"\u0110\u1ebfn \u0111\xe2y b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p m\u1ed9t s\u1ed1 v\u1ea5n \u0111\u1ec1 n\u1ebfu c\u1ed1 s\u1eeda \u0111\u1ed5i c\xe1c package si\xeau to kh\u1ed5ng l\u1ed3 nh\u01b0 m\u1ea5y c\xe1i c\u1ee7a facebook, c\xf3 v\xe0i package l\u1ea1i l\xe0 th\u01b0 m\u1ee5c con c\u1ee7a 1 package kh\xe1c."}),"\n",(0,t.jsxs)(c.p,{children:["B\u1ea1n c\xf3 th\u1ec3 v\xe0o trang ",(0,t.jsx)(c.a,{href:"https://gitpkg.vercel.app/",children:"https://gitpkg.vercel.app/"})," , d\xe1n \u0111\u01b0\u1eddng link tr\u1ef1c ti\u1ebfp \u0111\u1ebfn th\u01b0 m\u1ee5c ch\u1ee9a package \u0111\xf3 . Trang web n\xe0y s\u1ebd render cho b\u1ea1n 1 \u0111\u01b0\u1eddng link v\xe0 c\u1ea3 c\xe2u l\u1ec7nh yarn ( npm )."]}),"\n",(0,t.jsx)(c.p,{children:"(L\xfd thuy\u1ebft l\xe0 th\u1ebf, nh\u01b0ng n\xf3 c\xf3 ch\u1ea1y hay kh\xf4ng th\xec, ..., \u0111\u1ec3 ch\u1eafc k\xe8o th\xec m\u1ecdi ng\u01b0\u1eddi c\xf3 th\u1ec3 ch\u01a1i c\xe1ch 2 )"}),"\n",(0,t.jsx)(c.h3,{id:"c\xe1ch-2-s\u1eed-d\u1ee5ng-patch-package",children:"C\xe1ch 2: S\u1eed d\u1ee5ng patch-package"}),"\n",(0,t.jsx)(c.p,{children:"C\xe1ch n\xe0y tr\u1ef1c ti\u1ebfp h\u01a1n c\xe1ch th\u1ee9 nh\u1ea5t,"}),"\n",(0,t.jsx)(c.p,{children:"B\u1ea1n c\u1ee9 m\u1ea1nh d\u1ea1n t\xecm \u0111\u1ebfn ch\u1ed7 code trong node_module b\u1ea1n \u0111\u1ecbnh s\u1eeda v\xe0 m\u1ea1nh d\u1ea1n s\u1eeda n\xf3."}),"\n",(0,t.jsx)(c.p,{children:"Sau \u0111\xf3 ch\u1ea1y c\xe2u l\u1ec7nh:"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.code,{children:" npx patch-package <package name>"})}),"\n",(0,t.jsx)(c.p,{children:"patch-package sau \u0111\xf3 s\u1ebd t\u1ea1o m\u1ed9t th\u01b0 m\u1ee5c patches, khai b\xe1o v\u1ec1 c\xe1c thay \u0111\u1ed5i c\u1ee7a b\u1ea1n."}),"\n",(0,t.jsxs)(c.p,{children:["B\u1ea1n c\xf3 th\u1ec3 push folder n\xe0y l\xean git v\xe0 ch\u1ea1y l\u1ec7nh ",(0,t.jsx)(c.code,{children:"npx patch-package"})," \u0111\u1ec3 render l\u1ea1i nh\u1eefng thay \u0111\u1ed5i c\u1ee7a b\u1ea1n."]}),"\n",(0,t.jsxs)(c.p,{children:["\u0110\u1ec3 \u0111\u1ee1 m\u1ea5t m\u1ed9t b\u01b0\u1edbc m\u1ed7i khi install l\u1ea1i project, b\u1ea1n c\xf3 th\u1ec3 th\xeam d\xf2ng ",(0,t.jsx)(c.code,{children:'"postinstall": "npx patch-package"'})," v\xe0o script nh\u01b0 th\u1ebf n\xe0y \u0111\u1ec3 node_module t\u1ef1 render theo thay \u0111\u1ed5i c\u1ee7a b\u1ea1n m\u1ed7i khi install l\u1ea1i ."]}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.img,{alt:"image.png",src:e(24226).Z+"",width:"431",height:"166"})}),"\n",(0,t.jsx)(c.h2,{id:"3-demo",children:"3. Demo:"}),"\n",(0,t.jsx)(c.p,{children:"M\xecnh c\xf3 m\u1ed9t demo nho nh\u1ecf ."}),"\n",(0,t.jsx)(c.p,{children:"\u0110\xf3 l\xe0 \u0111\u1ed5i c\xe1i c\xe1i logo m\u1eb7c \u0111\u1ecbnh c\u1ee7a th\u1eb1ng metro trong REACT-NATIVE,\nsau 1 h\u1ed3i l\u1ee5c l\u1ecdi m\xecnh ph\xe1t hi\u1ec7n ra c\xe1i \u0111\u1ed1ng \u1ea5y vi\u1ebft \u1edf m\u1ed9t file t\xean TerminalReporter.js trong /node_modules/metro/src/lib"}),"\n",(0,t.jsx)(c.p,{children:"T\u01b0\u1edfng l\xe0 s\u1ebd c\xf3 m\u1ea5y h\xe0m thu\u1eadt to\xe1n lo\u1eb1ng ngo\u1eb1ng \u0111\u1ec3 in ra nh\u01b0 h\u1ed3i h\u1ecdc C++ \u1edf tr\u01b0\u1eddng, nh\u01b0ng kh\xf4ng, n\xf3 ch\u1ec9 l\xe0 c\xe1i m\u1ea3ng ch\u1ee9 t\u1eebng d\xf2ng d\u1ea5u #### m\u1ed9t :)))))\nTh\u1ebf th\xec d\u1ec5 r\u1ed3i, m\xecnh c\u1ee9 th\u1ebf m\xe0 \u0111\u1ed5i l\u1ea1i th\xf4i."}),"\n",(0,t.jsx)(c.p,{children:"T\u1eeb:"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.img,{alt:"image.png",src:e(85282).Z+"",width:"496",height:"532"})}),"\n",(0,t.jsx)(c.p,{children:"Th\xe0nh:"}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsx)(c.img,{alt:"image.png",src:e(7650).Z+"",width:"654",height:"636"})}),"\n",(0,t.jsx)(c.p,{children:"( M\xecnh l\xe0m trong nh\u1eefng ng\xe0y deadline d\xed t\u1eadn c\u1ed5, b\u1eadn qu\xe1 n\xean m\xecnh quy\u1ebft \u0111\u1ecbnh n\u1eb1m ngh\u1ecbch h\u1ebft 1 ng\xe0y cho \u0111\u1ee1 kh\u1ee7ng ho\u1ea3ng, ngh\u1ecbch xong stress h\u01a1n )"})]})}function g(n={}){const{wrapper:c}={...(0,h.a)(),...n.components};return c?(0,t.jsx)(c,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},1282:(n,c,e)=>{e.d(c,{Z:()=>t});const t=e.p+"assets/images/072ae723-f94b-4da3-9802-17bd928bfb57-6f9dbd8740f260951943790465efd645.png"},9370:(n,c,e)=>{e.d(c,{Z:()=>t});const t=e.p+"assets/images/35468773-2fcb-4363-8ac0-52a6a00f2f07-94562bf91bbf9f6c5a63587746110c78.jpg"},85282:(n,c,e)=>{e.d(c,{Z:()=>t});const t=e.p+"assets/images/6dffe6ba-b46f-43a1-a235-d30d12bf7cfa-8c69cefed3c002736512c6cfd98c4f2d.png"},7650:(n,c,e)=>{e.d(c,{Z:()=>t});const t=e.p+"assets/images/adef09a3-5890-477a-92af-7c5c4dbc7118-b3b116688e250d669456268feca9add1.png"},24226:(n,c,e)=>{e.d(c,{Z:()=>t});const t=e.p+"assets/images/ef048d12-b117-4597-8e6e-3de033978daa-69a4bf4f071055fbb4cc5767a106c30b.png"},11151:(n,c,e)=>{e.d(c,{Z:()=>o,a:()=>i});var t=e(67294);const h={},a=t.createContext(h);function i(n){const c=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(c):{...c,...n}}),[c,n])}function o(n){let c;return c=n.disableParentContext?"function"==typeof n.components?n.components(h):n.components||h:i(n.components),t.createElement(a.Provider,{value:c},n.children)}}}]);