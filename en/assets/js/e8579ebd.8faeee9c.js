"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3665],{22492:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(85893),a=t(11151);const r={title:"Securing Swagger Documentation with express-basic-auth in Nodejs - Nestjs | Code \u0111\u1ee7 th\u1ee9",description:"B\u1ea3o m\u1eadt Swagger Document trong d\u1ef1 \xe1n Nodejs v\xe0 Nestjs - Trong b\xe0i vi\u1ebft n\xe0y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn b\u1ea1n b\u1ea3o m\u1eadt API Swagger document trong Nodejs v\xe0 Nestjs",slug:"express-basic-auth-swagger-doc",authors:"thang",tags:["typescript","nodejs","nestjs","swagger"],image:"https://raw.githubusercontent.com/phamquyetthang/thang-blog/master/blog/2023-12-28/28.webp",hide_table_of_contents:!1},o=void 0,i={permalink:"/en/blog/express-basic-auth-swagger-doc",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-12-28/index.mdx",title:"Securing Swagger Documentation with express-basic-auth in Nodejs - Nestjs | Code \u0111\u1ee7 th\u1ee9",description:"B\u1ea3o m\u1eadt Swagger Document trong d\u1ef1 \xe1n Nodejs v\xe0 Nestjs - Trong b\xe0i vi\u1ebft n\xe0y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn b\u1ea1n b\u1ea3o m\u1eadt API Swagger document trong Nodejs v\xe0 Nestjs",date:"2023-12-28T00:00:00.000Z",formattedDate:"December 28, 2023",tags:[{label:"typescript",permalink:"/en/blog/tags/typescript"},{label:"nodejs",permalink:"/en/blog/tags/nodejs"},{label:"nestjs",permalink:"/en/blog/tags/nestjs"},{label:"swagger",permalink:"/en/blog/tags/swagger"}],readingTime:2.37,hasTruncateMarker:!0,authors:[{name:"Ph\u1ea1m Quy\u1ebft Th\u1eafng",title:"Fullstack developer",url:"https://github.com/phamquyetthang",imageURL:"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4",key:"thang"}],frontMatter:{title:"Securing Swagger Documentation with express-basic-auth in Nodejs - Nestjs | Code \u0111\u1ee7 th\u1ee9",description:"B\u1ea3o m\u1eadt Swagger Document trong d\u1ef1 \xe1n Nodejs v\xe0 Nestjs - Trong b\xe0i vi\u1ebft n\xe0y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn b\u1ea1n b\u1ea3o m\u1eadt API Swagger document trong Nodejs v\xe0 Nestjs",slug:"express-basic-auth-swagger-doc",authors:"thang",tags:["typescript","nodejs","nestjs","swagger"],image:"https://raw.githubusercontent.com/phamquyetthang/thang-blog/master/blog/2023-12-28/28.webp",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Hello World in 20 Programming Languages",permalink:"/en/blog/hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien"}},c={authorsImageUrls:[void 0]},p=[{value:"1. Install the express-basic-auth library",id:"1-install-the-express-basic-auth-library",level:2},{value:"2. Secure Swagger Document Page in JavaScript/TypeScript Projects",id:"2-secure-swagger-document-page-in-javascripttypescript-projects",level:2},{value:"<code>challenge: true</code> You need to pass this parameter to express-basic-auth to display the login prompt.",id:"challenge-true-you-need-to-pass-this-parameter-to-express-basic-auth-to-display-the-login-prompt",level:4},{value:"3. Secure Swagger Document Page in NestJS Project",id:"3-secure-swagger-document-page-in-nestjs-project",level:2},{value:"Conclusion",id:"conclusion",level:2}];function g(e){const s={br:"br",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Swagger is a powerful tool for creating and managing API documentation. However, securing Swagger documents is crucial to ensure that sensitive information is not exposed. In this article, we will explore how to use the express-basic-auth library to protect Swagger documentation pages in JavaScript and TypeScript projects. We will focus on two cases: a regular JavaScript/TypeScript project and a NestJS project with @nestjs/swagger."}),"\n",(0,n.jsx)(s.p,{children:"After implementation, a user/password input form will appear when accessing the document page, and the correct credentials must be entered to view the document:"}),"\n",(0,n.jsx)("img",{src:t(63321).Z,alt:"Basic auth",style:{height:300}}),"\n","\n",(0,n.jsx)(s.h2,{id:"1-install-the-express-basic-auth-library",children:"1. Install the express-basic-auth library"}),"\n",(0,n.jsx)(s.p,{children:"First, we need to install the express-basic-auth library. For regular JavaScript/TypeScript projects, you can run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install express-basic-auth\n"})}),"\n",(0,n.jsx)(s.p,{children:"If you are using TypeScript, add types for express-basic-auth:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/express-basic-auth\n"})}),"\n",(0,n.jsx)(s.h2,{id:"2-secure-swagger-document-page-in-javascripttypescript-projects",children:"2. Secure Swagger Document Page in JavaScript/TypeScript Projects"}),"\n",(0,n.jsx)(s.p,{children:"JavaScript"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// app.js\nconst express = require("express");\nconst basicAuth = require("express-basic-auth");\nconst swaggerUi = require("swagger-ui-express");\nconst swaggerDocument = require("./swagger.json");\n\nconst app = express();\n\n// Secure Swagger page with express-basic-auth\nconst users = { admin: "password123" };\napp.use(\n  "/api-docs",\n  basicAuth({ users, challenge: true }),\n  swaggerUi.serve,\n  swaggerUi.setup(swaggerDocument)\n);\n\n// Other routes and middleware of the application\n// ...\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}`);\n});\n'})}),"\n",(0,n.jsx)(s.p,{children:"TypeScript"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'// app.ts\nimport express from "express";\nimport basicAuth from "express-basic-auth";\nimport swaggerUi from "swagger-ui-express";\nimport swaggerDocument from "./swagger.json";\n\nconst app = express();\n\n// Secure Swagger page with express-basic-auth\nconst users = { admin: "password123" };\napp.use(\n  "/api-docs",\n  basicAuth({ users, challenge: true }),\n  swaggerUi.serve,\n  swaggerUi.setup(swaggerDocument)\n);\n\n// Other routes and middleware of the application\n// ...\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}`);\n});\n'})}),"\n",(0,n.jsxs)(s.h4,{id:"challenge-true-you-need-to-pass-this-parameter-to-express-basic-auth-to-display-the-login-prompt",children:[(0,n.jsx)(s.code,{children:"challenge: true"})," You need to pass this parameter to express-basic-auth to display the login prompt."]}),"\n",(0,n.jsxs)(s.p,{children:["Usersname is ",(0,n.jsx)(s.code,{children:"admin"}),(0,n.jsx)(s.br,{}),"\n","password is ",(0,n.jsx)(s.code,{children:"password123"})]}),"\n",(0,n.jsx)(s.h2,{id:"3-secure-swagger-document-page-in-nestjs-project",children:"3. Secure Swagger Document Page in NestJS Project"}),"\n",(0,n.jsx)(s.p,{children:"For NestJS projects, we can use express-basic-auth in the main.ts file of the application."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:'// main.ts\nimport { NestFactory } from "@nestjs/core";\nimport { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";\nimport * as basicAuth from "express-basic-auth";\nimport { AppModule } from "./app.module";\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  // Secure Swagger page with express-basic-auth\n  const users = { admin: "password123" };\n  app.use("/api-docs", basicAuth({ users, challenge: true }));\n\n  const options = new DocumentBuilder()\n    .setTitle("Your API")\n    .setDescription("API documentation")\n    .setVersion("1.0")\n    .build();\n  const document = SwaggerModule.createDocument(app, options);\n  SwaggerModule.setup("api-docs", app, document);\n\n  const PORT = process.env.PORT || 3000;\n  await app.listen(PORT);\n}\nbootstrap();\n'})}),"\n",(0,n.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(s.p,{children:"That's how you can secure the Swagger document page in JavaScript and TypeScript projects using the express-basic-auth library. With this article, you can apply a similar approach in your projects to ensure that your API documentation is securely protected."})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},63321:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/basic-auth-1-2942a553395050bd1dafffcabb9f5e40.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>o});var n=t(67294);const a={},r=n.createContext(a);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);