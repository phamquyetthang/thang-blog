"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{30010:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"express-basic-auth-swagger-doc","metadata":{"permalink":"/blog/express-basic-auth-swagger-doc","source":"@site/blog/2023-12-28/index.mdx","title":"B\u1ea3o m\u1eadt Swagger Document trong node v\xe0 nestjs | Code \u0111\u1ee7 th\u1ee9","description":"B\u1ea3o m\u1eadt Swagger Document trong d\u1ef1 \xe1n Nodejs v\xe0 Nestjs - Trong b\xe0i vi\u1ebft n\xe0y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn b\u1ea1n b\u1ea3o m\u1eadt API Swagger document trong Nodejs v\xe0 Nestjs","date":"2023-12-28T00:00:00.000Z","formattedDate":"28 th\xe1ng 12, 2023","tags":[{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"nodejs","permalink":"/blog/tags/nodejs"},{"label":"nestjs","permalink":"/blog/tags/nestjs"},{"label":"swagger","permalink":"/blog/tags/swagger"}],"readingTime":2.735,"hasTruncateMarker":true,"authors":[{"name":"Ph\u1ea1m Quy\u1ebft Th\u1eafng","title":"Fullstack developer","url":"https://github.com/phamquyetthang","imageURL":"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4","key":"thang"}],"frontMatter":{"title":"B\u1ea3o m\u1eadt Swagger Document trong node v\xe0 nestjs | Code \u0111\u1ee7 th\u1ee9","description":"B\u1ea3o m\u1eadt Swagger Document trong d\u1ef1 \xe1n Nodejs v\xe0 Nestjs - Trong b\xe0i vi\u1ebft n\xe0y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn b\u1ea1n b\u1ea3o m\u1eadt API Swagger document trong Nodejs v\xe0 Nestjs","slug":"express-basic-auth-swagger-doc","authors":"thang","tags":["typescript","nodejs","nestjs","swagger"],"image":"https://raw.githubusercontent.com/phamquyetthang/thang-blog/master/blog/2023-12-28/28.webp","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Hello World trong 20 Ng\xf4n Ng\u1eef L\u1eadp Tr\xecnh Ph\u1ed5 Bi\u1ebfn","permalink":"/blog/hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien"}},"content":"Swagger l\xe0 m\u1ed9t c\xf4ng c\u1ee5 m\u1ea1nh m\u1ebd \u0111\u1ec3 t\u1ea1o v\xe0 qu\u1ea3n l\xfd API documentation. Tuy nhi\xean, vi\u1ec7c b\u1ea3o m\u1eadt Swagger document l\xe0 m\u1ed9t y\u1ebfu t\u1ed1 quan tr\u1ecdng \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng th\xf4ng tin nh\u1ea1y c\u1ea3m kh\xf4ng b\u1ecb l\u1ed9 ra ngo\xe0i. Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u c\xe1ch s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n express-basic-auth \u0111\u1ec3 b\u1ea3o v\u1ec7 trang Swagger document trong d\u1ef1 \xe1n JavaScript v\xe0 TypeScript. Ch\xfang ta s\u1ebd t\u1eadp trung v\xe0o hai tr\u01b0\u1eddng h\u1ee3p: m\u1ed9t d\u1ef1 \xe1n s\u1eed d\u1ee5ng JavaScript/TypeScript th\xf4ng th\u01b0\u1eddng v\xe0 m\u1ed9t d\u1ef1 \xe1n NestJS v\u1edbi @nestjs/swagger.\\n\\nSau khi ho\xe0n th\xe0nh, m\u1ed9t form y\xeau c\u1ea7u nh\u1eadp user/password s\u1ebd hi\u1ec7n ra khi v\xe0o trang document v\xe0 b\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp \u0111\xfang t\xe0i kho\u1ea3n \u0111\u1ec3 c\xf3 th\u1ec3 xem document: \\n<img  src={require(\'./basic-auth-1.png\').default} alt=\\"Basic auth\\" style={{height: 300}} />\\n{/* truncate */}\\n\\n## 1. C\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n express-basic-auth\\n\\nTr\u01b0\u1edbc h\u1ebft, ch\xfang ta c\u1ea7n c\xe0i \u0111\u1eb7t th\u01b0 vi\u1ec7n express-basic-auth. \u0110\u1ed1i v\u1edbi d\u1ef1 \xe1n JavaScript/TypeScript th\xf4ng th\u01b0\u1eddng, b\u1ea1n c\xf3 th\u1ec3 ch\u1ea1y l\u1ec7nh sau:\\n\\n```bash\\nnpm install express-basic-auth\\n```\\n\\nN\u1ebfu b\u1ea1n \u0111ang s\u1eed d\u1ee5ng TypeScript, h\xe3y th\xeam types cho express-basic-auth:\\n\\n```bash\\nnpm install --save-dev @types/express-basic-auth\\n```\\n\\n## 2. B\u1ea3o m\u1eadt trang Swagger document trong d\u1ef1 \xe1n JavaScript/TypeScript\\n\\nJavaScript\\n\\n```javascript\\n// app.js\\nconst express = require(\\"express\\");\\nconst basicAuth = require(\\"express-basic-auth\\");\\nconst swaggerUi = require(\\"swagger-ui-express\\");\\nconst swaggerDocument = require(\\"./swagger.json\\");\\n\\nconst app = express();\\n\\n// B\u1ea3o m\u1eadt trang Swagger b\u1eb1ng express-basic-auth\\nconst users = { admin: \\"password123\\" };\\napp.use(\\n  \\"/api-docs\\",\\n  basicAuth({ users, challenge: true }),\\n  swaggerUi.serve,\\n  swaggerUi.setup(swaggerDocument)\\n);\\n\\n// C\xe1c route v\xe0 middleware kh\xe1c c\u1ee7a \u1ee9ng d\u1ee5ng\\n// ...\\n\\nconst PORT = process.env.PORT || 3000;\\napp.listen(PORT, () => {\\n  console.log(`Server is running on port ${PORT}`);\\n});\\n```\\n\\nTypeScript\\n\\n```typescript\\n// app.ts\\nimport express from \\"express\\";\\nimport basicAuth from \\"express-basic-auth\\";\\nimport swaggerUi from \\"swagger-ui-express\\";\\nimport swaggerDocument from \\"./swagger.json\\";\\n\\nconst app = express();\\n\\n// B\u1ea3o m\u1eadt trang Swagger b\u1eb1ng express-basic-auth\\nconst users = { admin: \\"password123\\" };\\napp.use(\\n  \\"/api-docs\\",\\n  basicAuth({ users, challenge: true }),\\n  swaggerUi.serve,\\n  swaggerUi.setup(swaggerDocument)\\n);\\n\\n// C\xe1c route v\xe0 middleware kh\xe1c c\u1ee7a \u1ee9ng d\u1ee5ng\\n// ...\\n\\nconst PORT = process.env.PORT || 3000;\\napp.listen(PORT, () => {\\n  console.log(`Server is running on port ${PORT}`);\\n});\\n```\\n#### ``` challenge: true ``` B\u1ea1n c\u1ea7n ph\u1ea3i truy\u1ec1n param n\xe0y \u0111\u1ec3 express-basic-auth hi\u1ec7n th\u1ecb prompt \u0111\u0103ng nh\u1eadp\\nUsersname l\xe0 ```admin```\\\\\\npassword l\xe0 ```password123```\\n## 3. B\u1ea3o m\u1eadt trang Swagger document trong d\u1ef1 \xe1n NestJS\\n\\n\u0110\u1ed1i v\u1edbi d\u1ef1 \xe1n NestJS, ch\xfang ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng express-basic-auth trong module main.ts c\u1ee7a \u1ee9ng d\u1ee5ng.\\n\\n```typescript\\n// main.ts\\nimport { NestFactory } from \\"@nestjs/core\\";\\nimport { SwaggerModule, DocumentBuilder } from \\"@nestjs/swagger\\";\\nimport * as basicAuth from \\"express-basic-auth\\";\\nimport { AppModule } from \\"./app.module\\";\\n\\nasync function bootstrap() {\\n  const app = await NestFactory.create(AppModule);\\n\\n  // B\u1ea3o m\u1eadt trang Swagger b\u1eb1ng express-basic-auth\\n  const users = { admin: \\"password123\\" };\\n  app.use(\\"/api-docs\\", basicAuth({ users, challenge: true }));\\n\\n  const options = new DocumentBuilder()\\n    .setTitle(\\"Your API\\")\\n    .setDescription(\\"API documentation\\")\\n    .setVersion(\\"1.0\\")\\n    .build();\\n  const document = SwaggerModule.createDocument(app, options);\\n  SwaggerModule.setup(\\"api-docs\\", app, document);\\n\\n  const PORT = process.env.PORT || 3000;\\n  await app.listen(PORT);\\n}\\nbootstrap();\\n```\\n\\n## K\u1ebft lu\u1eadn\\n\\nTr\xean \u0111\xe2y l\xe0 c\xe1ch b\u1ea1n c\xf3 th\u1ec3 b\u1ea3o m\u1eadt trang Swagger document trong d\u1ef1 \xe1n JavaScript v\xe0 TypeScript s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n express-basic-auth. Qua b\xe0i vi\u1ebft n\xe0y, b\u1ea1n c\xf3 th\u1ec3 \xe1p d\u1ee5ng ph\u01b0\u01a1ng ph\xe1p t\u01b0\u01a1ng t\u1ef1 trong c\xe1c d\u1ef1 \xe1n c\u1ee7a m\xecnh \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng t\xe0i li\u1ec7u API c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 an to\xe0n."},{"id":"hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien","metadata":{"permalink":"/blog/hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien","source":"@site/blog/2023-12-23-hello-world-20-ngon-ngu/index.md","title":"Hello World trong 20 Ng\xf4n Ng\u1eef L\u1eadp Tr\xecnh Ph\u1ed5 Bi\u1ebfn","description":"Hello World Python | Hello World Java | Hello World C++ | Hello World PHP | Hello World Javascript | Hello World C#","date":"2023-12-23T00:00:00.000Z","formattedDate":"23 th\xe1ng 12, 2023","tags":[{"label":"fun-code","permalink":"/blog/tags/fun-code"},{"label":"hello world","permalink":"/blog/tags/hello-world"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"nodejs","permalink":"/blog/tags/nodejs"},{"label":"nestjs","permalink":"/blog/tags/nestjs"},{"label":"godot","permalink":"/blog/tags/godot"}],"readingTime":1.92,"hasTruncateMarker":true,"authors":[{"name":"Ph\u1ea1m Quy\u1ebft Th\u1eafng","title":"Fullstack developer","url":"https://github.com/phamquyetthang","imageURL":"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4","key":"thang"}],"frontMatter":{"title":"Hello World trong 20 Ng\xf4n Ng\u1eef L\u1eadp Tr\xecnh Ph\u1ed5 Bi\u1ebfn","description":"Hello World Python | Hello World Java | Hello World C++ | Hello World PHP | Hello World Javascript | Hello World C#","slug":"hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien","authors":"thang","tags":["fun-code","hello world","typescript","nodejs","nestjs","godot"],"image":"https://raw.githubusercontent.com/phamquyetthang/thang-blog/master/blog/2023-12-23-hello-world-20-ngon-ngu/hello.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"B\u1ea3o m\u1eadt Swagger Document trong node v\xe0 nestjs | Code \u0111\u1ee7 th\u1ee9","permalink":"/blog/express-basic-auth-swagger-doc"},"nextItem":{"title":"React - Upload \u1ea3nh v\xe0 video trong rich text editor","permalink":"/blog/react-upload-anh-va-video-trong-rich-text-editor"}},"content":"\x3c!-- truncate --\x3e\\r\\n\\r\\nCh\u1eafc h\u1eb3n ai trong ch\xfang ta c\u0169ng \u0111\xe3 t\u1eebng b\u1eaft \u0111\u1ea7u h\u1ecdc l\u1eadp tr\xecnh b\u1eb1ng ch\u01b0\u01a1ng tr\xecnh \\"Hello, World!\\". \u0110\xe2y l\xe0 m\u1ed9t b\u01b0\u1edbc nh\u1ecf nh\u01b0ng quan tr\u1ecdng, gi\xfap b\u1ea1n l\xe0m quen v\u1edbi c\xfa ph\xe1p c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t ng\xf4n ng\u1eef l\u1eadp tr\xecnh m\u1edbi. Trong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd xem \\"Hello, World!\\" \u0111\u01b0\u1ee3c vi\u1ebft nh\u01b0 th\u1ebf n\xe0o trong 20 ng\xf4n ng\u1eef l\u1eadp tr\xecnh ph\u1ed5 bi\u1ebfn (Java, C#, Python, Js, PHP, ...).\\r\\n\\r\\n![Image](./hello.png)\\r\\n\\r\\n## 1. Python:\\r\\n### \\"Hello, world\\" Python\\r\\n```python\\r\\nprint(\\"Hello, World!\\")\\r\\n```\\r\\n\\r\\n## 2. Java\\r\\n### \\"Hello, world\\" Java\\r\\n```java\\r\\npublic class HelloWorld {\\r\\n    public static void main(String[] args) {\\r\\n        System.out.println(\\"Hello, World!\\");\\r\\n    }\\r\\n}\\r\\n```\\r\\n\\r\\n## 3. JavaScript:\\r\\n### \\"Hello, world\\" JavaScript\\r\\n```javascript\\r\\nconsole.log(\\"Hello, World!\\");\\r\\n```\\r\\n## 4. C:\\r\\n### \\"Hello, world\\" C\\r\\n```c\\r\\n#include <stdio.h>\\r\\nint main() {\\r\\n    printf(\\"Hello, World!\\\\n\\");\\r\\n    return 0;\\r\\n}\\r\\n```\\r\\n## 5. C++:\\r\\n### \\"Hello, world\\" C++\\r\\n```cpp\\r\\n#include <iostream>\\r\\nusing namespace std;\\r\\nint main() {\\r\\n    cout << \\"Hello, World!\\" << endl;\\r\\n    return 0;\\r\\n}\\r\\n```\\r\\n## 6. C#:\\r\\n### \\"Hello, world\\" C#\\r\\n```csharp\\r\\nusing System;\\r\\nclass HelloWorld {\\r\\n    static void Main() {\\r\\n        Console.WriteLine(\\"Hello, World!\\");\\r\\n    }\\r\\n}\\r\\n```\\r\\n## 7. Ruby:\\r\\n### \\"Hello, world\\" Ruby\\r\\n```ruby\\r\\nputs \\"Hello, World!\\"\\r\\n```\\r\\n## 8. PHP:\\r\\n### \\"Hello, world\\" PHP\\r\\n```php\\r\\n<?php\\r\\necho \\"Hello, World!\\";\\r\\n?>\\r\\n```\\r\\n## 9. Swift:\\r\\n### \\"Hello, world\\" Swift\\r\\n```swift\\r\\nprint(\\"Hello, World!\\")\\r\\n```\\r\\n## 10. Go:\\r\\n### \\"Hello, world\\" Go\\r\\n```go\\r\\npackage main\\r\\nimport \\"fmt\\"\\r\\nfunc main() {\\r\\n    fmt.Println(\\"Hello, World!\\")\\r\\n}\\r\\n```\\r\\n\\r\\n## 11. Kotlin:\\r\\n### \\"Hello, world\\" Kotlin\\r\\n```kotlin\\r\\nfun main() {\\r\\n    println(\\"Hello, World!\\")\\r\\n}\\r\\n```\\r\\n## 12. Rust:\\r\\n### \\"Hello, world\\" Rust\\r\\n```rust\\r\\nfn main() {\\r\\n    println!(\\"Hello, World!\\");\\r\\n}\\r\\n```\\r\\n## 13. TypeScript:\\r\\n### \\"Hello, world\\" TypeScript\\r\\n```typescript\\r\\nconsole.log(\\"Hello, World!\\");\\r\\n```\\r\\n## 14. Dart:\\r\\n### \\"Hello, world\\" Dart\\r\\n```dart\\r\\nvoid main() {\\r\\n  print(\\"Hello, World!\\");\\r\\n}\\r\\n```\\r\\n## 15. Objective-C:\\r\\n### \\"Hello, world\\" Objective-C\\r\\n```objective\\r\\n#import <Foundation/Foundation.h>\\r\\nint main() {\\r\\n    NSLog(@\\"Hello, World!\\");\\r\\n    return 0;\\r\\n}\\r\\n```\\r\\n## 16. Shell Script:\\r\\n### \\"Hello, world\\" Shell Script\\r\\n```bash\\r\\necho \\"Hello, World!\\"\\r\\n```\\r\\n## 17. R:\\r\\n### \\"Hello, world\\" R\\r\\n```r\\r\\ncat(\\"Hello, World!\\\\n\\")\\r\\n```\\r\\n## 18. Perl:\\r\\n### \\"Hello, world\\" Perl\\r\\n```perl\\r\\nprint \\"Hello, World!\\\\n\\";\\r\\n```\\r\\n## 19. Haskell:\\r\\n### \\"Hello, world\\" Haskell\\r\\n```haskell\\r\\nmain :: IO ()\\r\\nmain = putStrLn \\"Hello, World!\\"\\r\\n```\\r\\n## 20.Lua:\\r\\n### \\"Hello, world\\" Lua\\r\\n```lua\\r\\nprint(\\"Hello, World!\\")\\r\\n```"},{"id":"react-upload-anh-va-video-trong-rich-text-editor","metadata":{"permalink":"/blog/react-upload-anh-va-video-trong-rich-text-editor","source":"@site/blog/2023-12-22-react-quill-cloundinary/index.md","title":"React - Upload \u1ea3nh v\xe0 video trong rich text editor","description":"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng react-quill \u0111\u1ec3 l\xe0m richtext editor ( WYSIWYG ) v\xe0 t\xedch h\u1ee3p Cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong b\xe0i vi\u1ebft","date":"2023-12-22T00:00:00.000Z","formattedDate":"22 th\xe1ng 12, 2023","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"nodejs","permalink":"/blog/tags/nodejs"}],"readingTime":6.155,"hasTruncateMarker":true,"authors":[{"name":"Ph\u1ea1m Quy\u1ebft Th\u1eafng","title":"Fullstack developer","url":"https://github.com/phamquyetthang","imageURL":"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4","key":"thang"}],"frontMatter":{"title":"React - Upload \u1ea3nh v\xe0 video trong rich text editor","description":"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng react-quill \u0111\u1ec3 l\xe0m richtext editor ( WYSIWYG ) v\xe0 t\xedch h\u1ee3p Cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong b\xe0i vi\u1ebft","slug":"react-upload-anh-va-video-trong-rich-text-editor","authors":["thang"],"tags":["react","javascript","nodejs"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Hello World trong 20 Ng\xf4n Ng\u1eef L\u1eadp Tr\xecnh Ph\u1ed5 Bi\u1ebfn","permalink":"/blog/hello-world-trong-20-ngon-ngu-lap-trinh-pho-bien"},"nextItem":{"title":"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module","permalink":"/blog/lam-cach-nao-de-sua-doi-thu-vien-trong-node-module"}},"content":"### 1.Gi\u1edbi thi\u1ec7u:\\nTrong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web ho\u1eb7c trang blog, vi\u1ec7c cung c\u1ea5p m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o phong ph\xfa cho ng\u01b0\u1eddi d\xf9ng l\xe0 m\u1ed9t nhu c\u1ea7u ph\u1ed5 bi\u1ebfn. \u0110i\u1ec1u n\xe0y cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea1o, ch\u1ec9nh s\u1eeda v\xe0 \u0111\u1ecbnh d\u1ea1ng n\u1ed9i dung c\u1ee7a h\u1ecd m\u1ed9t c\xe1ch linh ho\u1ea1t v\xe0 d\u1ec5 d\xe0ng. M\u1ed9t trong nh\u1eefng tr\xecnh so\u1ea1n th\u1ea3o ph\u1ed5 bi\u1ebfn trong c\u1ed9ng \u0111\u1ed3ng l\u1eadp tr\xecnh l\xe0 React Quill, v\u1edbi kh\u1ea3 n\u0103ng t\xf9y ch\u1ec9nh cao v\xe0 d\u1ec5 t\xedch h\u1ee3p v\xe0o d\u1ef1 \xe1n React c\u1ee7a b\u1ea1n.\\n\\nTuy nhi\xean, vi\u1ec7c cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea3i l\xean v\xe0 ch\xe8n h\xecnh \u1ea3nh, video v\xe0o tr\xecnh so\u1ea1n th\u1ea3o kh\xf4ng ph\u1ea3i l\xe0 \u0111i\u1ec1u \u0111\u01a1n gi\u1ea3n. \u0110\u1eb7c bi\u1ec7t khi b\u1ea1n c\u1ea7n l\u01b0u tr\u1eef v\xe0 qu\u1ea3n l\xfd h\xe0ng ng\xe0n t\u1ec7p \u0111a ph\u01b0\u01a1ng ti\u1ec7n. Gi\u1ea3i ph\xe1p l\xe0 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef h\xecnh \u1ea3nh \u0111\xe1m m\xe2y m\u1ea1nh m\u1ebd nh\u01b0 Cloudinary. Cloudinary cho ph\xe9p b\u1ea1n l\u01b0u tr\u1eef, t\u1ea3i l\xean, v\xe0 qu\u1ea3n l\xfd h\xecnh \u1ea3nh, video m\u1ed9t c\xe1ch hi\u1ec7u qu\u1ea3, gi\xfap \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n t\u0103ng c\u01b0\u1eddng t\xednh n\u0103ng v\xe0 hi\u1ec7u su\u1ea5t.\\n\\nTrong b\xe0i vi\u1ebft n\xe0y, ch\xfang ta s\u1ebd t\xecm hi\u1ec3u c\xe1ch t\xedch h\u1ee3p React Quill v\u1edbi d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef h\xecnh \u1ea3nh Cloudinary \u0111\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 ph\u1ee9c t\u1ea1p n\xe0y. Ch\xfang ta s\u1ebd c\xf9ng nhau x\xe2y d\u1ef1ng m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea3i l\xean v\xe0 ch\xe8n h\xecnh \u1ea3nh, video m\u1ed9t c\xe1ch thu\u1eadn ti\u1ec7n v\xe0 nhanh ch\xf3ng.\\n\\n* React Quill: L\xe0 m\u1ed9t tr\xecnh so\u1ea1n th\u1ea3o m\xe3 ngu\u1ed3n m\u1edf cho ph\xe9p ng\u01b0\u1eddi d\xf9ng t\u1ea1o, ch\u1ec9nh s\u1eeda n\u1ed9i dung v\u1edbi \u0111\u1ecbnh d\u1ea1ng \u0111a d\u1ea1ng.\\n* Cloudinary: D\u1ecbch v\u1ee5 l\u01b0u tr\u1eef \u0111\xe1m m\xe2y m\u1ea1nh m\u1ebd h\u1ed7 tr\u1ee3 qu\u1ea3n l\xfd, t\u1ea3i l\xean, x\u1eed l\xfd h\xecnh \u1ea3nh v\xe0 video m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng.\\n\x3c!-- truncate --\x3e\\n### 2. C\xe0i \u0111\u1eb7t react-quill\\n* \u0110\u1ea7u ti\xean ch\xfang ta c\u1ea7n kh\u1edfi t\u1ea1o project react b\u1eb1ng vite ho\u1eb7c create-react-app\\n```\\nyarn create vite react-quill-upload --template react-ts\\n```\\n* C\xe0i \u0111\u1eb7t react-quill :\\n```\\nyarn add react-quill\\n```\\n* Import react-quill component:\\n```\\nimport React, { useState } from \'react\';\\nimport ReactQuill from \'react-quill\';\\nimport \'react-quill/dist/quill.snow.css\';\\n\\nfunction MyComponent() {\\n  const [value, setValue] = useState(\'\');\\n  const reactQuillRef = useRef<ReactQuill>(null);\\n\\n  return <ReactQuill ref={reactQuillRef} theme=\\"snow\\" value={value} onChange={setValue} />;\\n}\\n```\\n* \u0110\u1ec3 upload image trong quill editor, ch\xfang ta c\u1ea7n khai b\xe1o image v\xe0o ph\u1ea7n module v\xe0 formats\\n```\\n<ReactQuill\\n      ref={reactQuillRef}\\n      theme=\\"snow\\"\\n      placeholder=\\"Start writing...\\"\\n      modules={{\\n        toolbar: {\\n          container: [\\n            [{ header: \\"1\\" }, { header: \\"2\\" }, { font: [] }],\\n            [{ size: [] }],\\n            [\\"bold\\", \\"italic\\", \\"underline\\", \\"strike\\", \\"blockquote\\"],\\n            [\\n              { list: \\"ordered\\" },\\n              { list: \\"bullet\\" },\\n              { indent: \\"-1\\" },\\n              { indent: \\"+1\\" },\\n            ],\\n            [\\"link\\", \\"image\\", \\"video\\"],\\n            [\\"code-block\\"],\\n            [\\"clean\\"],\\n          ],\\n        },\\n        clipboard: {\\n          matchVisual: false,\\n        },\\n      }}\\n      formats={[\\n        \\"header\\",\\n        \\"font\\",\\n        \\"size\\",\\n        \\"bold\\",\\n        \\"italic\\",\\n        \\"underline\\",\\n        \\"strike\\",\\n        \\"blockquote\\",\\n        \\"list\\",\\n        \\"bullet\\",\\n        \\"indent\\",\\n        \\"link\\",\\n        \\"image\\",\\n        \\"video\\",\\n        \\"code-block\\",\\n      ]}\\n      value={value}\\n      onChange={onChange}\\n    />\\n```\\n* L\xfac n\xe0y b\u1ea1n s\u1ebd th\u1ea5y icon upload image tr\xean thanh c\xf4ng c\u1ee5 c\u1ee7a react-quill. H\xe3y import th\u1eed v\xe0 in gi\xe1 tr\u1ecb c\u1ee7a to\xe0n b\u1ed9 v\u0103n b\u1ea3n ra, b\u1ea1n s\u1ebd th\u1ea5y r\u1eb1ng m\u1eb7c \u0111\u1ecbnh react-quill s\u1ebd l\u01b0u \u1ea3nh c\u1ee7a b\u1ea1n d\u01b0\u1edbi d\u1ea1ng base-64:\\n![image.png](./1.webp)\\n\\n> => n\u1ebfu s\u1eed d\u1ee5ng theo c\xe1ch m\u1eb7c \u0111\u1ecbnh n\xe0y, ch\xfang ta ho\xe0n to\xe0n c\xf3 th\u1ec3 l\u01b0u tr\u1eef \u1ea3nh trong database d\u01b0\u1edbi d\u1ea1ng base 64, trong demo m\xecnh ch\u1ec9 s\u1eed d\u1ee5ng \u1ea3nh v\u1edbi k\xedch th\u01b0\u1edbc nh\u1ecf, n\u1ebfu \u1ea3nh c\xe0ng l\u1edbn string base-64 s\u1ebd c\xe0ng l\u1edbn, nh\u01b0 th\u1ebf s\u1ebd r\u1ea5t t\u1ed1n b\u1ed9 nh\u1edb.\\n\\n### 3. Handle upload image\\n* \u0110\u1ec3 \u0111\u1ee1 ph\u1ea3i l\u01b0u ch\u1eef h\xecnh \u1ea3nh trong \u0111o\u1ea1n v\u0103n b\u1ea3n d\u01b0\u1edbi d\u1ea1ng base-64, ch\xfang ta c\u1ea7n t\xedch h\u1ee3p m\u1ed9t clould service v\xe0 ch\u1ec9 c\u1ea7n l\u01b0u l\u1ea1i \u0111\u01b0\u1eddng link c\u1ee7a \u1ea3nh \u0111\xf3.Ti\u1ebfp theo \u0111\xe2y m\xecnh s\u1ebd h\u01b0\u1edbng d\u1eabn c\xe1c b\u1ea1n handle h\xe0nh \u0111\u1ed9ng upload c\u1ee7a react-quill v\xe0 s\u1eed d\u1ee5ng cloudinary \u0111\u1ec3 l\u01b0u tr\u1eef n\xf3 ( c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\xe0m t\u01b0\u01a1ng t\u1ef1 v\u1edbi m\u1ed9t cloud b\u1ea5t k\u1ef3 n\xe0o kh\xe1c, v\xed d\u1ee5 firebase storage, ... )\\n* Th\xeam imageHandler\\n```\\n <ReactQuill\\n      ref={reactQuillRef}\\n      theme=\\"snow\\"\\n      placeholder=\\"Start writing...\\"\\n      modules={{\\n        toolbar: {\\n          container: [\\n             ...\\n            [\\"link\\", \\"image\\", \\"video\\"],\\n            [\\"code-block\\"],\\n            [\\"clean\\"],\\n          ],\\n          handlers: {\\n            image: imageHandler,   // <- \\n          },\\n        },\\n        clipboard: {\\n          matchVisual: false,\\n        },\\n      }}\\n      ...\\n    />\\n```\\n\\n```\\n  const imageHandler = useCallback(() => {\\n    const input = document.createElement(\\"input\\");\\n    input.setAttribute(\\"type\\", \\"file\\");\\n    input.setAttribute(\\"accept\\", \\"image/*\\");\\n    input.click();\\n    input.onchange = async () => {\\n      if (input !== null && input.files !== null) {\\n        const file = input.files[0];\\n        console.log(file)\\n      }\\n    };\\n  }, []);\\n```\\n> Gi\u1ea3i th\xedch : \u1ede \u0111o\u1ea1n code b\xean tr\xean, m\xecnh vi\u1ebft th\xeam m\u1ed9t h\xe0m \u0111\u1ec3 handle container image c\u1ee7a react-quill. Trong function imageHandler m\xecnh t\u1ea1o ra m\u1ed9t th\u1ebb input file v\xe0 g\u1ecdi h\xe0ng click() \u0111\u1ec3 m\u1edf ra c\u1eeda s\u1ed5 import file. C\xe1c b\u1ea1n ho\xe0n to\xe0n c\xf3 th\u1ec3 m\u1edf r\u1ed9ng ph\u1ea7n n\xe0y \u0111\u1ec3 m\u1edf l\xean upload widget c\u1ee7a cloudinary ( [\u0111\u1ecdc th\xeam](https://cloudinary.com/documentation/react_image_and_video_upload) ). **Upload v\u1edbi widget s\u1ebd b\u1ea3o m\u1eadt v\xe0 t\u1ed1i \u01b0u h\u01a1n do ch\xfang ta c\xf3 th\u1ec3 t\xe1i s\u1eed d\u1ee5ng nh\u1eefng \u1ea3nh \u0111\xe3 upload tr\u01b0\u1edbc \u0111\xf3, n\u1ebfu c\xf3 th\u1eddi gian v\xe0 c\u1ea7n thi\u1ebft, c\xe1c b\u1ea1n n\xean d\xf9ng c\xe1ch \u0111\xf3 !**\\n* Function upload image l\xean cloudinary:\\nC\xf3 nhi\u1ec1u c\xe1ch upload l\xean cloudinary, nh\u01b0ng m\xecnh ch\u1ecdn c\xe1ch d\xf9ng c\xe1ch g\u1ecdi api v\xec n\xf3 \u0111\u01a1n gi\u1ea3n nh\u1ea5t:\\n```\\nconst uploadToCloudinary = async (file: File): Promise<string> => {\\n  const formData = new FormData();\\n  formData.append(\\"file\\", file);\\n  formData.append(\\n    \\"upload_preset\\",\\n    import.meta.env.VITE_CLOUDINARY_PRESET\\n  );\\n  const res = await fetch(\\n    `https://api.cloudinary.com/v1_1/${\\n      import.meta.env.VITE_CLOUDINARY_NAME\\n    }/upload`,\\n    { method: \\"POST\\", body: formData }\\n  );\\n  const data = await res.json();\\n  const url = data.url;\\n\\n  return url\\n}\\n```\\n> Gi\u1ea3i th\xedch: \u0111\u1ec3 upload \u1ea3nh l\xean cloudinary b\u1eb1ng api, c\xe1c b\u1ea1n c\u1ea7n c\xf3 Product Name v\xe0 upload_preset, c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\u1ea5y t\u1eeb trang setting c\u1ee7a cloudinary ( b\u1ea1n c\u1ea7n \u0111\u1ec3 mode c\u1ee7a upload_preset l\xe0 Unsigned, n\u1ebfu mu\u1ed1n c\xe1ch b\u1ea3o m\u1eadt h\u01a1n c\xe1c b\u1ea1n c\xf3 th\u1ec3 d\xf9ng c\xe1c c\xe1ch upload kh\xe1c c\u1ee7a cloudinary )\\n![image.png](./2.webp)\\n* Insert image url tr\u1ea3 v\u1ec1 t\u1eeb cloudinary v\xe0o n\u1ed9i dung c\u1ee7a \u0111o\u1ea1n v\u0103n b\u1ea3n\\n```\\n  const imageHandler = useCallback(() => {\\n    const input = document.createElement(\\"input\\");\\n    input.setAttribute(\\"type\\", \\"file\\");\\n    input.setAttribute(\\"accept\\", \\"image/*\\");\\n    input.click();\\n    input.onchange = async () => {\\n      if (input !== null && input.files !== null) {\\n        const file = input.files[0];\\n        const url = await uploadToCloudinary(file);\\n        const quill = reactQuillRef.current;\\n        if (quill) {\\n          const range = quill.getEditorSelection();\\n          range && quill.getEditor().insertEmbed(range.index, \\"image\\", url);\\n        }\\n      }\\n    };\\n  }, []);\\n```\\n> Gi\u1ea3i th\xedch: Sau khi c\xf3 \u0111\u01b0\u1ee3c url t\u1eeb vi\u1ec7c upload l\xean cloudinary, ch\xfang ta c\u1ea7n g\xe1n n\xf3 v\xe0o \u0111\xfang v\u1ecb tr\xed c\u1ee7a th\u1ebb img t\u01b0\u01a1ng \u1ee9ng trong \u0111o\u1ea1n v\u0103n b\u1ea3n:\\n ```\\nconst range = quill.getEditorSelection();\\n range && quill.getEditor().insertEmbed(range.index, \\"image\\", url);\\n```\\n> Ph\u1ea7n n\xe0y ch\xednh l\xe0 \u0111\u1ec3 x\xe1c \u0111\u1ecbnh v\u1ecb tr\xed c\u1ee7a th\u1ebb img v\xe0 g\xe1n n\xf3 v\u1edbi url tr\u1ea3 v\u1ec1 t\u1eeb cloudinary ( tr\u01b0\u1edbc \u0111\xf3 h\xe3y d\xf9ng useRef \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn ReactQuill component )\\n\\n* V\xe0 \u0111\xe2y l\xe0 k\u1ebft qu\u1ea3, l\xfac n\xe0y n\u1ed9i dung v\u0103n b\u1ea3n ch\u1ec9 c\xf2n ch\u1ee9a \u0111\u01b0\u1eddng link c\u1ee7a \u1ea3nh thay v\xec base-64:\\n![image.png](./3.webp)\\n\\nTo\xe0n b\u1ed9 source code c\xf3 th\u1ec3 xem \u1edf: https://github.com/phamquyetthang/react-quill-image-upload\\n\\n\\n### 4. K\u1ebft lu\u1eadn\\nTr\xean \u0111\xe2y l\xe0 h\u01b0\u1edbng d\u1eabn \u0111\u01a1n gi\u1ea3n c\u1ee7a m\xecnh \u0111\u1ec3 handle vi\u1ec7c upload h\xecnh \u1ea3nh trong react-quill, c\xe1c b\u1ea1n c\xf3 th\u1ec3 l\xe0m \u0111i\u1ec1u t\u01b0\u01a1ng t\u1ef1 v\u1edbi vi\u1ec7c upload video!\\n\\nC\xe1c b\u1ea1n c\xf3 th\u1ec3 xem to\xe0n b\u1ed9 code c\u1ee7a ph\u1ea7n h\u01b0\u1edbng d\u1eabn tr\xean trong github c\u1ee7a m\xecnh: https://github.com/phamquyetthang/react-quill-image-upload\\n\\nHy v\u1ecdng b\xe0i vi\u1ebft n\xe0y h\u1eefu \xedch v\u1edbi b\u1ea1n. C\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 \u0111\u1ecdc!\\n\\nN\u1ebfu c\xf3 b\u1ea5t k\u1ef3 c\xe2u h\u1ecfi ho\u1eb7c \xfd ki\u1ebfn g\xec, h\xe3y \u0111\u1ec3 l\u1ea1i b\xecnh lu\u1eadn b\xean d\u01b0\u1edbi. Ch\xfang ta c\xf3 th\u1ec3 c\xf9ng nhau th\u1ea3o lu\u1eadn v\u1ec1 ch\u1ee7 \u0111\u1ec1 n\xe0y."},{"id":"lam-cach-nao-de-sua-doi-thu-vien-trong-node-module","metadata":{"permalink":"/blog/lam-cach-nao-de-sua-doi-thu-vien-trong-node-module","source":"@site/blog/2023-12-22-sua-trong-node-module/index.md","title":"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module","description":"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )","date":"2023-12-22T00:00:00.000Z","formattedDate":"22 th\xe1ng 12, 2023","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"nodejs","permalink":"/blog/tags/nodejs"}],"readingTime":3.05,"hasTruncateMarker":true,"authors":[{"name":"Ph\u1ea1m Quy\u1ebft Th\u1eafng","title":"Fullstack developer","url":"https://github.com/phamquyetthang","imageURL":"https://avatars.githubusercontent.com/u/43201625?s=400&u=9fa24ddfe492d15ba4692d4b295a5a2ef6b9ce24&v=4","key":"thang"}],"frontMatter":{"title":"L\xe0m c\xe1ch n\xe0o \u0111\u1ec3 s\u1eeda \u0111\u1ed5i th\u01b0 vi\u1ec7n trong node module","description":"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )","slug":"lam-cach-nao-de-sua-doi-thu-vien-trong-node-module","authors":["thang"],"tags":["javascript","nodejs"],"image":"https://images.viblo.asia/35468773-2fcb-4363-8ac0-52a6a00f2f07.jpg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"React - Upload \u1ea3nh v\xe0 video trong rich text editor","permalink":"/blog/react-upload-anh-va-video-trong-rich-text-editor"}},"content":"M\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 fix l\u1ed7i trong node_module v\xe0 l\u01b0u l\u1ea1i ch\u1ec9nh s\u1eeda \u0111\xf3 ( d\xf9ng patch-package, ... )\\n## 1. Khi c\u1ea7n fix th\u01b0 vi\u1ec7n t\u1eeb npm:\\n\u0110\u1ed1i v\u1edbi c\xe1c anh em ng\u01b0\u1eddi ch\u01a1i h\u1ec7 js , th\xec ch\u1eafc \u0111\u1ec1u kh\xf4ng l\u1ea1 l\u1eabm g\xec v\u1edbi vi\u1ec7c c\xe0i \u0111\u1eb7t c\xe1c th\u01b0 vi\u1ec7n c\u1ee7a b\xean th\u1ee9 ba qua c\xe2u l\u1ec7nh \\n`npm install <package name>` ( ho\u1eb7c yarn )\\n\\nC\xe1c th\u01b0 vi\u1ec7n n\xe0y sau khi \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t s\u1ebd n\u1eb1m trong node module v\xe0 t\xf4i v\xe0 c\xe1c b\u1ea1n ch\u1ec9 vi\u1ec7c l\u1ea5y ra s\u1eed d\u1ee5ng.\\n\\n![](./35468773-2fcb-4363-8ac0-52a6a00f2f07.jpg)\\n\\nNh\u1eefng g\xec c\xf3 trong node_module ch\xfang ta kh\xf4ng c\u1ea7n thi\u1ebft ph\u1ea3i bi\u1ebft g\u1ed3m nh\u1eefng g\xec.\\n\\nNode_module c\xf3 khi c\xf2n l\xe0 v\xf9ng c\u1ea5m kh\xf4ng ai mu\u1ed1n \u0111\u1ee5ng v\xe0o.\\n\\nX\xf3a node_module v\xe0 c\xe0i l\u1ea1i c\u0169ng l\xe0 1 trong nh\u1eefng gi\u1ea3i ph\xe1p t\xe2m linh ch\u1eafc ch\u1eafn b\u1ea1n t\u1eebng s\u1eed d\u1ee5ng \u0111\u1ec3 fix bug trong tuy\u1ec7t vong.\\n\\nV\u1ea5n \u0111\u1ec1 ph\xe1t sinh khi ch\xfang ta ph\xe1t hi\u1ec7n 1 issues c\u1ee7a th\u01b0 vi\u1ec7n kh\xf4ng nh\u01b0 ch\xfang ta mong mu\u1ed1n nh\u01b0ng kh\xf4ng mu\u1ed1n t\xecm th\u01b0 vi\u1ec7n kh\xe1c \u0111\u1ec3 thay th\u1ebf.\\n\x3c!-- truncate --\x3e\\n### V\u1eady l\xe0m c\xe1ch n\xe0o \u0111\u1ec3 t\u1ef1 m\xecnh s\u1eeda th\u01b0 vi\u1ec7n v\xe0 kh\xf4ng b\u1ecb m\u1ea5t \u0111i n\u1ebfu x\xf3a node_module \\n\\nCh\xfang ta c\xf3 nh\u1eefng c\xe1ch sau \u0111\xe2y:\\n\\n## 2.C\xe1c c\xe1ch s\u1eeda th\u01b0 vi\u1ec7n trong node_modules\\n### C\xe1ch 1: Fork repo c\u1ee7a package\\nB\u1ea1n c\xf3 th\u1ec3 v\xe0o source code c\u1ee7a package \u0111\xf3, fork v\u1ec1 git c\u1ee7a m\xecnh m\u1ed9t b\u1ea3n , s\u1eeda \u0111\u1ed5i n\xf3 sau \u0111\xf3 s\u1eeda.\\n\\nSau \u0111\xf3 khai b\xe1o n\xf3 v\xe0o trong package.json:\\nV\xed d\u1ee5 nh\u01b0 n\xe0y \\n![image.png](./072ae723-f94b-4da3-9802-17bd928bfb57.png)\\n\\nThay s\u1ed1 phi\xean b\u1ea3n c\u1ee7a package b\u1eb1ng \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ebfn repo c\u1ee7a b\u1ea1n theo d\u1ea1ng `git+{repo}`\\n\\n\u0110\u1ebfn \u0111\xe2y b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p m\u1ed9t s\u1ed1 v\u1ea5n \u0111\u1ec1 n\u1ebfu c\u1ed1 s\u1eeda \u0111\u1ed5i c\xe1c package si\xeau to kh\u1ed5ng l\u1ed3 nh\u01b0 m\u1ea5y c\xe1i c\u1ee7a facebook, c\xf3 v\xe0i package l\u1ea1i l\xe0 th\u01b0 m\u1ee5c con c\u1ee7a 1 package kh\xe1c.\\n\\nB\u1ea1n c\xf3 th\u1ec3 v\xe0o trang https://gitpkg.vercel.app/ , d\xe1n \u0111\u01b0\u1eddng link tr\u1ef1c ti\u1ebfp \u0111\u1ebfn th\u01b0 m\u1ee5c ch\u1ee9a package \u0111\xf3 . Trang web n\xe0y s\u1ebd render cho b\u1ea1n 1 \u0111\u01b0\u1eddng link v\xe0 c\u1ea3 c\xe2u l\u1ec7nh yarn ( npm ).\\n\\n(L\xfd thuy\u1ebft l\xe0 th\u1ebf, nh\u01b0ng n\xf3 c\xf3 ch\u1ea1y hay kh\xf4ng th\xec, ..., \u0111\u1ec3 ch\u1eafc k\xe8o th\xec m\u1ecdi ng\u01b0\u1eddi c\xf3 th\u1ec3 ch\u01a1i c\xe1ch 2 )\\n### C\xe1ch 2: S\u1eed d\u1ee5ng patch-package\\nC\xe1ch n\xe0y tr\u1ef1c ti\u1ebfp h\u01a1n c\xe1ch th\u1ee9 nh\u1ea5t, \\n\\nB\u1ea1n c\u1ee9 m\u1ea1nh d\u1ea1n t\xecm \u0111\u1ebfn ch\u1ed7 code trong node_module b\u1ea1n \u0111\u1ecbnh s\u1eeda v\xe0 m\u1ea1nh d\u1ea1n s\u1eeda n\xf3.\\n\\nSau \u0111\xf3 ch\u1ea1y c\xe2u l\u1ec7nh: \\n\\n` npx patch-package <package name>`\\n\\npatch-package sau \u0111\xf3 s\u1ebd t\u1ea1o m\u1ed9t th\u01b0 m\u1ee5c patches, khai b\xe1o v\u1ec1 c\xe1c thay \u0111\u1ed5i c\u1ee7a b\u1ea1n. \\n\\nB\u1ea1n c\xf3 th\u1ec3 push folder n\xe0y l\xean git v\xe0 ch\u1ea1y l\u1ec7nh `npx patch-package` \u0111\u1ec3 render l\u1ea1i nh\u1eefng thay \u0111\u1ed5i c\u1ee7a b\u1ea1n.\\n\\n\u0110\u1ec3 \u0111\u1ee1 m\u1ea5t m\u1ed9t b\u01b0\u1edbc m\u1ed7i khi install l\u1ea1i project, b\u1ea1n c\xf3 th\u1ec3 th\xeam d\xf2ng `\\"postinstall\\": \\"npx patch-package\\"` v\xe0o script nh\u01b0 th\u1ebf n\xe0y \u0111\u1ec3 node_module t\u1ef1 render theo thay \u0111\u1ed5i c\u1ee7a b\u1ea1n m\u1ed7i khi install l\u1ea1i .\\n\\n![image.png](./ef048d12-b117-4597-8e6e-3de033978daa.png)\\n\\n## 3. Demo:\\nM\xecnh c\xf3 m\u1ed9t demo nho nh\u1ecf .\\n\\n\u0110\xf3 l\xe0 \u0111\u1ed5i c\xe1i c\xe1i logo m\u1eb7c \u0111\u1ecbnh c\u1ee7a th\u1eb1ng metro trong REACT-NATIVE,\\nsau 1 h\u1ed3i l\u1ee5c l\u1ecdi m\xecnh ph\xe1t hi\u1ec7n ra c\xe1i \u0111\u1ed1ng \u1ea5y vi\u1ebft \u1edf m\u1ed9t file t\xean TerminalReporter.js trong /node_modules/metro/src/lib\\n\\nT\u01b0\u1edfng l\xe0 s\u1ebd c\xf3 m\u1ea5y h\xe0m thu\u1eadt to\xe1n lo\u1eb1ng ngo\u1eb1ng \u0111\u1ec3 in ra nh\u01b0 h\u1ed3i h\u1ecdc C++ \u1edf tr\u01b0\u1eddng, nh\u01b0ng kh\xf4ng, n\xf3 ch\u1ec9 l\xe0 c\xe1i m\u1ea3ng ch\u1ee9 t\u1eebng d\xf2ng d\u1ea5u #### m\u1ed9t :))))) \\nTh\u1ebf th\xec d\u1ec5 r\u1ed3i, m\xecnh c\u1ee9 th\u1ebf m\xe0 \u0111\u1ed5i l\u1ea1i th\xf4i.\\n\\nT\u1eeb:\\n\\n![image.png](./6dffe6ba-b46f-43a1-a235-d30d12bf7cfa.png)\\n\\nTh\xe0nh: \\n\\n![image.png](./adef09a3-5890-477a-92af-7c5c4dbc7118.png)\\n\\n( M\xecnh l\xe0m trong nh\u1eefng ng\xe0y deadline d\xed t\u1eadn c\u1ed5, b\u1eadn qu\xe1 n\xean m\xecnh quy\u1ebft \u0111\u1ecbnh n\u1eb1m ngh\u1ecbch h\u1ebft 1 ng\xe0y cho \u0111\u1ee1 kh\u1ee7ng ho\u1ea3ng, ngh\u1ecbch xong stress h\u01a1n )"}]}')}}]);