"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42],{1459:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>r});var i=e(5893),l=e(1151);const c={title:"React - Upload \u1ea3nh v\xe0 video trong rich text editor",description:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng react-quill \u0111\u1ec3 l\xe0m richtext editor ( WYSIWYG ) v\xe0 t\xedch h\u1ee3p Cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong b\xe0i vi\u1ebft",slug:"react-upload-anh-va-video-trong-rich-text-editor",authors:["thang"],tags:["react","javascript","nodejs"],hide_table_of_contents:!1},a="H\u01b0\u1edbng d\u1eabn Upload \u1ea3nh v\xe0 video trong React Quill s\u1eed d\u1ee5ng Cloudinary",h={permalink:"/blog/react-upload-anh-va-video-trong-rich-text-editor",source:"@site/blog/2023-12-22-react-quill-cloundinary/index.md",title:"React - Upload \u1ea3nh v\xe0 video trong rich text editor",description:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng react-quill \u0111\u1ec3 l\xe0m richtext editor ( WYSIWYG ) v\xe0 t\xedch h\u1ee3p Cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong b\xe0i vi\u1ebft",date:"2023-12-22T00:00:00.000Z",formattedDate:"22 th\xe1ng 12, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:6.155,hasTruncateMarker:!0,authors:[{name:"Ph\u1ea1m Quy\u1ebft Th\u1eafng",title:"Fullstack developer",url:"https://github.com/phamquyetthang",imageURL:"https://avatars.githubusercontent.com/u/43201625?v=4",key:"thang"}],frontMatter:{title:"React - Upload \u1ea3nh v\xe0 video trong rich text editor",description:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng react-quill \u0111\u1ec3 l\xe0m richtext editor ( WYSIWYG ) v\xe0 t\xedch h\u1ee3p Cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong b\xe0i vi\u1ebft",slug:"react-upload-anh-va-video-trong-rich-text-editor",authors:["thang"],tags:["react","javascript","nodejs"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Hello World trong 20 Ng\xf4n Ng\u1eef L\u1eadp Tr\xecnh Ph\u1ed5 Bi\u1ebfn",permalink:"/blog/hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien"},nextItem:{title:"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module",permalink:"/blog/lam-cach-nao-de-sua-doi-thu-vien-trong-node-module"}},o={authorsImageUrls:[void 0]},r=[{value:"1.Gi\u1edbi thi\u1ec7u:",id:"1gi\u1edbi-thi\u1ec7u",level:3},{value:"2. C\xe0i \u0111\u1eb7t react-quill",id:"2-c\xe0i-\u0111\u1eb7t-react-quill",level:3},{value:"3. Handle upload image",id:"3-handle-upload-image",level:3},{value:"4. K\u1ebft lu\u1eadn",id:"4-k\u1ebft-lu\u1eadn",level:3}];function d(n){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"1gi\u1edbi-thi\u1ec7u",children:"1.Gi\u1edbi thi\u1ec7u:"}),"\n",(0,i.jsx)(t.p,{children:"Trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web ho\u1eb7c trang blog, vi\u1ec7c cung c\u1ea5p m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o phong ph\xfa cho ng\u01b0\u1eddi d\xf9ng l\xe0 m\u1ed9t nhu c\u1ea7u ph\u1ed5 bi\u1ebfn. \u0110i\u1ec1u n\xe0y cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea1o, ch\u1ec9nh s\u1eeda v\xe0 \u0111\u1ecbnh d\u1ea1ng n\u1ed9i dung c\u1ee7a h\u1ecd m\u1ed9t c\xe1ch linh ho\u1ea1t v\xe0 d\u1ec5 d\xe0ng. M\u1ed9t trong nh\u1eefng tr\xecnh so\u1ea1n th\u1ea3o ph\u1ed5 bi\u1ebfn trong c\u1ed9ng \u0111\u1ed3ng l\u1eadp tr\xecnh l\xe0 React Quill, v\u1edbi kh\u1ea3 n\u0103ng t\xf9y ch\u1ec9nh cao v\xe0 d\u1ec5 t\xedch h\u1ee3p v\xe0o d\u1ef1 \xe1n React c\u1ee7a b\u1ea1n."}),"\n",(0,i.jsx)(t.p,{children:"Tuy nhi\xean, vi\u1ec7c cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea3i l\xean v\xe0 ch\xe8n h\xecnh \u1ea3nh, video v\xe0o tr\xecnh so\u1ea1n th\u1ea3o kh\xf4ng ph\u1ea3i l\xe0 \u0111i\u1ec1u \u0111\u01a1n gi\u1ea3n. \u0110\u1eb7c bi\u1ec7t khi b\u1ea1n c\u1ea7n l\u01b0u tr\u1eef v\xe0 qu\u1ea3n l\xfd h\xe0ng ng\xe0n t\u1ec7p \u0111a ph\u01b0\u01a1ng ti\u1ec7n. Gi\u1ea3i ph\xe1p l\xe0 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef h\xecnh \u1ea3nh \u0111\xe1m m\xe2y m\u1ea1nh m\u1ebd nh\u01b0 Cloudinary. Cloudinary cho ph\xe9p b\u1ea1n l\u01b0u tr\u1eef, t\u1ea3i l\xean, v\xe0 qu\u1ea3n l\xfd h\xecnh \u1ea3nh, video m\u1ed9t c\xe1ch hi\u1ec7u qu\u1ea3, gi\xfap \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n t\u0103ng c\u01b0\u1eddng t\xednh n\u0103ng v\xe0 hi\u1ec7u su\u1ea5t."}),"\n",(0,i.jsx)(t.p,{children:"Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u c\xe1ch t\xedch h\u1ee3p React Quill v\u1edbi d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef h\xecnh \u1ea3nh Cloudinary \u0111\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 ph\u1ee9c t\u1ea1p n\xe0y. Ch\xfang ta s\u1ebd c\xf9ng nhau x\xe2y d\u1ef1ng m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea3i l\xean v\xe0 ch\xe8n h\xecnh \u1ea3nh, video m\u1ed9t c\xe1ch thu\u1eadn ti\u1ec7n v\xe0 nhanh ch\xf3ng."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"React Quill: L\xe0 m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o m\xe3 ngu\u1ed3n m\u1edf cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea1o, ch\u1ec9nh s\u1eeda n\u1ed9i dung v\u1edbi \u0111\u1ecbnh d\u1ea1ng \u0111a d\u1ea1ng."}),"\n",(0,i.jsx)(t.li,{children:"Cloudinary: D\u1ecbch v\u1ee5 l\u01b0u tr\u1eef \u0111\xe1m m\xe2y m\u1ea1nh m\u1ebd h\u1ed7 tr\u1ee3 qu\u1ea3n l\xfd, t\u1ea3i l\xean, x\u1eed l\xfd h\xecnh \u1ea3nh v\xe0 video m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"2-c\xe0i-\u0111\u1eb7t-react-quill",children:"2. C\xe0i \u0111\u1eb7t react-quill"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u0110\u1ea7u ti\xean ch\xfang ta c\u1ea7n kh\u1edfi t\u1ea1o project react b\u1eb1ng vite ho\u1eb7c create-react-app"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yarn create vite react-quill-upload --template react-ts\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"C\xe0i \u0111\u1eb7t react-quill :"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yarn add react-quill\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Import react-quill component:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import React, { useState } from 'react';\nimport ReactQuill from 'react-quill';\nimport 'react-quill/dist/quill.snow.css';\n\nfunction MyComponent() {\n  const [value, setValue] = useState('');\n  const reactQuillRef = useRef<ReactQuill>(null);\n\n  return <ReactQuill ref={reactQuillRef} theme=\"snow\" value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u0110\u1ec3 upload image trong quill editor, ch\xfang ta c\u1ea7n khai b\xe1o image v\xe0o ph\u1ea7n module v\xe0 formats"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<ReactQuill\n      ref={reactQuillRef}\n      theme="snow"\n      placeholder="Start writing..."\n      modules={{\n        toolbar: {\n          container: [\n            [{ header: "1" }, { header: "2" }, { font: [] }],\n            [{ size: [] }],\n            ["bold", "italic", "underline", "strike", "blockquote"],\n            [\n              { list: "ordered" },\n              { list: "bullet" },\n              { indent: "-1" },\n              { indent: "+1" },\n            ],\n            ["link", "image", "video"],\n            ["code-block"],\n            ["clean"],\n          ],\n        },\n        clipboard: {\n          matchVisual: false,\n        },\n      }}\n      formats={[\n        "header",\n        "font",\n        "size",\n        "bold",\n        "italic",\n        "underline",\n        "strike",\n        "blockquote",\n        "list",\n        "bullet",\n        "indent",\n        "link",\n        "image",\n        "video",\n        "code-block",\n      ]}\n      value={value}\n      onChange={onChange}\n    />\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["L\xfac n\xe0y b\u1ea1n s\u1ebd th\u1ea5y icon upload image tr\xean thanh c\xf4ng c\u1ee5 c\u1ee7a react-quill. H\xe3y import th\u1eed v\xe0 in gi\xe1 tr\u1ecb c\u1ee7a to\xe0n b\u1ed9 v\u0103n b\u1ea3n ra, b\u1ea1n s\u1ebd th\u1ea5y r\u1eb1ng m\u1eb7c \u0111\u1ecbnh react-quill s\u1ebd l\u01b0u \u1ea3nh c\u1ee7a b\u1ea1n d\u01b0\u1edbi d\u1ea1ng base-64:\n",(0,i.jsx)(t.img,{alt:"image.png",src:e(712).Z+"",width:"787",height:"458"})]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"=> n\u1ebfu s\u1eed d\u1ee5ng theo c\xe1ch m\u1eb7c \u0111\u1ecbnh n\xe0y, ch\xfang ta ho\xe0n to\xe0n c\xf3 th\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong database d\u01b0\u1edbi d\u1ea1ng base 64, trong demo m\xecnh ch\u1ec9 s\u1eed d\u1ee5ng \u1ea3nh v\u1edbi k\xedch th\u01b0\u1edbc nh\u1ecf, n\u1ebfu \u1ea3nh c\xe0ng l\u1edbn string base-64 s\u1ebd c\xe0ng l\u1edbn, nh\u01b0 th\u1ebf s\u1ebd r\u1ea5t t\u1ed1n b\u1ed9 nh\u1edb."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"3-handle-upload-image",children:"3. Handle upload image"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u0110\u1ec3 \u0111\u1ee1 ph\u1ea3i l\u01b0u ch\u1eef h\xecnh \u1ea3nh trong \u0111o\u1ea1n v\u0103n b\u1ea3n d\u01b0\u1edbi d\u1ea1ng base-64, ch\xfang ta c\u1ea7n t\xedch h\u1ee3p m\u1ed9t clould service v\xe0 ch\u1ec9 c\u1ea7n l\u01b0u l\u1ea1i \u0111\u01b0\u1eddng link c\u1ee7a \u1ea3nh \u0111\xf3.Ti\u1ebfp theo \u0111\xe2y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn c\xe1c b\u1ea1n handle h\xe0nh \u0111\u1ed9ng upload c\u1ee7a react-quill v\xe0 s\u1eed d\u1ee5ng cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef n\xf3 ( c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\xe0m t\u01b0\u01a1ng t\u1ef1 v\u1edbi m\u1ed9t cloud b\u1ea5t k\u1ef3 n\xe0o kh\xe1c, v\xed d\u1ee5 firebase storage, ... )"}),"\n",(0,i.jsx)(t.li,{children:"Th\xeam imageHandler"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:' <ReactQuill\n      ref={reactQuillRef}\n      theme="snow"\n      placeholder="Start writing..."\n      modules={{\n        toolbar: {\n          container: [\n             ...\n            ["link", "image", "video"],\n            ["code-block"],\n            ["clean"],\n          ],\n          handlers: {\n            image: imageHandler,   // <- \n          },\n        },\n        clipboard: {\n          matchVisual: false,\n        },\n      }}\n      ...\n    />\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  const imageHandler = useCallback(() => {\n    const input = document.createElement("input");\n    input.setAttribute("type", "file");\n    input.setAttribute("accept", "image/*");\n    input.click();\n    input.onchange = async () => {\n      if (input !== null && input.files !== null) {\n        const file = input.files[0];\n        console.log(file)\n      }\n    };\n  }, []);\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Gi\u1ea3i th\xedch : \u1ede \u0111o\u1ea1n code b\xean tr\xean, m\xecnh vi\u1ebft th\xeam m\u1ed9t h\xe0m \u0111\u1ec3 handle container image c\u1ee7a react-quill. Trong function imageHandler m\xecnh t\u1ea1o ra m\u1ed9t th\u1ebb input file v\xe0 g\u1ecdi h\xe0ng click() \u0111\u1ec3 m\u1edf ra c\u1eeda s\u1ed5 import file. C\xe1c b\u1ea1n ho\xe0n to\xe0n c\xf3 th\u1ec3 m\u1edf r\u1ed9ng ph\u1ea7n n\xe0y \u0111\u1ec3 m\u1edf l\xean upload widget c\u1ee7a cloudinary ( ",(0,i.jsx)(t.a,{href:"https://cloudinary.com/documentation/react_image_and_video_upload",children:"\u0111\u1ecdc th\xeam"})," ). ",(0,i.jsx)(t.strong,{children:"Upload v\u1edbi widget s\u1ebd b\u1ea3o m\u1eadt v\xe0 t\u1ed1i \u01b0u h\u01a1n do ch\xfang ta c\xf3 th\u1ec3 t\xe1i s\u1eed d\u1ee5ng nh\u1eefng \u1ea3nh \u0111\xe3 upload tr\u01b0\u1edbc \u0111\xf3, n\u1ebfu c\xf3 th\u1eddi gian v\xe0 c\u1ea7n thi\u1ebft, c\xe1c b\u1ea1n n\xean d\xf9ng c\xe1ch \u0111\xf3 !"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Function upload image l\xean cloudinary:\nC\xf3 nhi\u1ec1u c\xe1ch upload l\xean cloudinary, nh\u01b0ng m\xecnh ch\u1ecdn c\xe1ch d\xf9ng c\xe1ch g\u1ecdi api v\xec n\xf3 \u0111\u01a1n gi\u1ea3n nh\u1ea5t:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'const uploadToCloudinary = async (file: File): Promise<string> => {\n  const formData = new FormData();\n  formData.append("file", file);\n  formData.append(\n    "upload_preset",\n    import.meta.env.VITE_CLOUDINARY_PRESET\n  );\n  const res = await fetch(\n    `https://api.cloudinary.com/v1_1/${\n      import.meta.env.VITE_CLOUDINARY_NAME\n    }/upload`,\n    { method: "POST", body: formData }\n  );\n  const data = await res.json();\n  const url = data.url;\n\n  return url\n}\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Gi\u1ea3i th\xedch: \u0111\u1ec3 upload \u1ea3nh l\xean cloudinary b\u1eb1ng api, c\xe1c b\u1ea1n c\u1ea7n c\xf3 Product Name v\xe0 upload_preset, c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\u1ea5y t\u1eeb trang setting c\u1ee7a cloudinary ( b\u1ea1n c\u1ea7n \u0111\u1ec3 mode c\u1ee7a upload_preset l\xe0 Unsigned, n\u1ebfu mu\u1ed1n c\xe1ch b\u1ea3o m\u1eadt h\u01a1n c\xe1c b\u1ea1n c\xf3 th\u1ec3 d\xf9ng c\xe1c c\xe1ch upload kh\xe1c c\u1ee7a cloudinary )\n",(0,i.jsx)(t.img,{alt:"image.png",src:e(4397).Z+"",width:"825",height:"502"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Insert image url tr\u1ea3 v\u1ec1 t\u1eeb cloudinary v\xe0o n\u1ed9i dung c\u1ee7a \u0111o\u1ea1n v\u0103n b\u1ea3n"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  const imageHandler = useCallback(() => {\n    const input = document.createElement("input");\n    input.setAttribute("type", "file");\n    input.setAttribute("accept", "image/*");\n    input.click();\n    input.onchange = async () => {\n      if (input !== null && input.files !== null) {\n        const file = input.files[0];\n        const url = await uploadToCloudinary(file);\n        const quill = reactQuillRef.current;\n        if (quill) {\n          const range = quill.getEditorSelection();\n          range && quill.getEditor().insertEmbed(range.index, "image", url);\n        }\n      }\n    };\n  }, []);\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Gi\u1ea3i th\xedch: Sau khi c\xf3 \u0111\u01b0\u1ee3c url t\u1eeb vi\u1ec7c upload l\xean cloudinary, ch\xfang ta c\u1ea7n g\xe1n n\xf3 v\xe0o \u0111\xfang v\u1ecb tr\xed c\u1ee7a th\u1ebb img t\u01b0\u01a1ng \u1ee9ng trong \u0111o\u1ea1n v\u0103n b\u1ea3n:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'const range = quill.getEditorSelection();\nrange && quill.getEditor().insertEmbed(range.index, "image", url);\n'})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Ph\u1ea7n n\xe0y ch\xednh l\xe0 \u0111\u1ec3 x\xe1c \u0111\u1ecbnh v\u1ecb tr\xed c\u1ee7a th\u1ebb img v\xe0 g\xe1n n\xf3 v\u1edbi url tr\u1ea3 v\u1ec1 t\u1eeb cloudinary ( tr\u01b0\u1edbc \u0111\xf3 h\xe3y d\xf9ng useRef \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn ReactQuill component )"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["V\xe0 \u0111\xe2y l\xe0 k\u1ebft qu\u1ea3, l\xfac n\xe0y n\u1ed9i dung v\u0103n b\u1ea3n ch\u1ec9 c\xf2n ch\u1ee9a \u0111\u01b0\u1eddng link c\u1ee7a \u1ea3nh thay v\xec base-64:\n",(0,i.jsx)(t.img,{alt:"image.png",src:e(5713).Z+"",width:"825",height:"349"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To\xe0n b\u1ed9 source code c\xf3 th\u1ec3 xem \u1edf: ",(0,i.jsx)(t.a,{href:"https://github.com/phamquyetthang/react-quill-image-upload",children:"https://github.com/phamquyetthang/react-quill-image-upload"})]}),"\n",(0,i.jsx)(t.h3,{id:"4-k\u1ebft-lu\u1eadn",children:"4. K\u1ebft lu\u1eadn"}),"\n",(0,i.jsx)(t.p,{children:"Tr\xean \u0111\xe2y l\xe0 h\u01b0\u1edbng d\u1eabn \u0111\u01a1n gi\u1ea3n c\u1ee7a m\xecnh \u0111\u1ec3 handle vi\u1ec7c upload h\xecnh \u1ea3nh trong react-quill, c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\xe0m \u0111i\u1ec1u t\u01b0\u01a1ng t\u1ef1 v\u1edbi vi\u1ec7c upload video!"}),"\n",(0,i.jsxs)(t.p,{children:["C\xe1c b\u1ea1n c\xf3 th\u1ec3 xem to\xe0n b\u1ed9 code c\u1ee7a ph\u1ea7n h\u01b0\u1edbng d\u1eabn tr\xean trong github c\u1ee7a m\xecnh: ",(0,i.jsx)(t.a,{href:"https://github.com/phamquyetthang/react-quill-image-upload",children:"https://github.com/phamquyetthang/react-quill-image-upload"})]}),"\n",(0,i.jsx)(t.p,{children:"Hy v\u1ecdng b\xe0i vi\u1ebft n\xe0y h\u1eefu \xedch v\u1edbi b\u1ea1n. C\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 \u0111\u1ecdc!"}),"\n",(0,i.jsx)(t.p,{children:"N\u1ebfu c\xf3 b\u1ea5t k\u1ef3 c\xe2u h\u1ecfi ho\u1eb7c \xfd ki\u1ebfn g\xec, h\xe3y \u0111\u1ec3 l\u1ea1i b\xecnh lu\u1eadn b\xean d\u01b0\u1edbi. Ch\xfang ta c\xf3 th\u1ec3 c\xf9ng nhau th\u1ea3o lu\u1eadn v\u1ec1 ch\u1ee7 \u0111\u1ec1 n\xe0y."})]})}function u(n={}){const{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},712:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/1-000bd2c41a54fbfbd240eeac53998ebe.webp"},4397:(n,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/2-cce1e7ada738808e38789328c2666506.webp"},5713:(n,t,e)=>{e.d(t,{Z:()=>i});const i="data:image/webp;base64,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"},1151:(n,t,e)=>{e.d(t,{Z:()=>h,a:()=>a});var i=e(7294);const l={},c=i.createContext(l);function a(n){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function h(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(c.Provider,{value:t},n.children)}}}]);