// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// // ! Express 애플리케이션 생성하기
// const app = express();


// // ! 라우팅 설정하기
// console.log(app);
// // app.get('/', (req, res) => {
// //   const mainPage = fs.readFileSync("./src/views/HTML/login.html", "utf8");
// //   res.send(mainPage);
// // })

// // app.get('/', (req, res) => {
// //   const filePath = path.join(__dirname, '/src/views/HTML/login.html');
// //   res.sendFile(filePath);
// // });
// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'src', 'views', 'HTML', 'login.html');
//   const mainPage = fs.readFileSync(filePath, 'utf-8');
//   res.send(mainPage);
// })
// app.listen(2222, () => {
//   console.log('성공 2222번호 포크')
// })

const a = new Date();
console.log(a);