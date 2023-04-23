import http from "http";
import db from "../../../util/db/dbclass.js";
import fs from "fs";
function page(url,res) {
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlfs = fs.readFileSync("./src/views/HTML/login.html", "utf8");
    res.write(htmlfs);
    res.end();
  }
  if(url === include('login.js')){
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlfs = fs.readFileSync("./src/views/JS/login.js", "utf8");
    res.write(htmlfs);
    res.end();
  }
  if(url === include('login.css')){
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlfs = fs.readFileSync("./src/views/CSS/login.css", "utf8");
    res.write(htmlfs);
    res.end();
  }
  if(url === "/register"){}
}

const server = http.createServer((req, res) => {
  try{
  switch (req.method) {
    case "GET":
      page(req.url,res);
      break;
    case "POST":
      page(req.url);
      break;
  }
}
  catch(err){
    console.log('서버 응답 안 받아');
  }
  // if (req.method === "GET") {
  //   if (req.url === "/") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     const htmlfs = fs.readFileSync("./src/views/HTML/login.html", "utf8");
  //     res.write(htmlfs);
  //     res.end();
  //   }
      // const testdb = new db("localhost", "root", "1234", "testdb");
      // res.end(
      //   console.log(
      //     testdb.query("desc new_table", (err, rows) => {
      //       if (err) {
      //         console.log(err);
      //       } else {
      //         console.log(rows);
      //       }
      //     })
      //   )
      // );
    
  
  // if (req.method === "POST") {
  // }
});

server.listen(2222, (error) => {
  console.log(error);
});
