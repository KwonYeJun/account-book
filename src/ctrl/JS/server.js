import http from "http";
import db from "../../../util/db/dbclass.js";
import fs from "fs";





function postpage(req,res) {
  if(req.url === "/accountcreate"){
    res.writeHead(200, { "Content-Type": "text/css" });
    // const cssfs = fs.readFileSync("./src/views/CSS/login.css", "utf8");
    req.on('data', (data) => {
      console.log(data.toString());
    })

  }
}

const server = http.createServer((req, res) => {
  try{
  switch (req.method) {
    case "GET":
      page(req.url,res);
      break;
    case "POST":
      postpage(req,res);
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
  //   if (req.url  === "/src/views/CSS/login.css") {
  //     res.writeHead(200, { "Content-Type": "text/css" });
  //     const cssfs = fs.readFileSync("./src/views/CSS/login.css", "utf8");
  //     res.write(cssfs);
  //     res.end();
  //   }}
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

export default server;

// server.listen(2222, (error) => {
//   console.log(error);
// });
