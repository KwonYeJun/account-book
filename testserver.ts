import express, { Request, Response ,NextFunction} from "express";
import * as path from "path";

const root = path.join(__dirname, "../../")
console.log(root)



const app = express();

// 메인 페이지를 연결해 주기 위하며 처음 접속을 도와주는 미들 웨워 하나와 같이 파일을 정적으로 연결을 해주었다.
app.get("/", (req: Request, res: Response) => {
  const filePath = path.join(root,'/src/views/html/login.html');
  res.sendFile(filePath);
});
app.use(express.static(path.join(root, "/src/views")));


const myMiddleware = (req : Request, res : Response, next : NextFunction) => {
  console.log("미들웨어 함수가 실행되었습니다.");
  next(); // 다음 미들웨어로 제어를 전달합니다.
};
// 첫 번째 미들 웨워를 실행 시켰을 때 next(); 함수가 있어야 다음 미들 웨어를 실행 시킨다.
app.use(myMiddleware);
// 다음으로 실행될 미들 웨어는 웹 브라우저에 제공할 정적 파일들이 위치한 경로입니다.
app.use(express.static(root));


app.listen(2222, () => {
  console.log("서버가 정상 연결되었습니다.");
});

