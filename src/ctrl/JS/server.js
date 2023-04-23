import http from "http";
import db from "../../../util/db/dbclass.js";
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello World</h1>");
      const testdb = new db("localhost", "root", "1234", "testdb");
      res.end(
        console.log(
          testdb.query("desc new_table", (err, rows) => {
            if (err) {
              console.log(err);
            } else {
              console.log(rows);
            }
          })
        )
      );
    }
  }
  if (req.method === "POST") {
  }
});

server.listen(2222, (error) => {
  console.log(error);
});
