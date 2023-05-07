import express from 'express';

// ! Express 애플리케이션 생성하기
const app = express();


// ! 라우팅 설정하기
console.log(app);
app.get('/', (req, res) => {
  res.send('heelong')
})

app.listen(2222, () => {
  console.log('성공 2222번호 포크')
})