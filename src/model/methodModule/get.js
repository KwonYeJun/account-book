export default function (url,res) {
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlfs = fs.readFileSync("./src/views/HTML/login.html", "utf8");
    res.write(htmlfs);
    res.end();
  }
  if (url === "/src/views/JS/login.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    const jsfs = fs.readFileSync("./src/views/JS/login.js", "utf8");
    res.write(jsfs);
    res.end();
  }
  if (url === "/src/views/CSS/login.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const cssfs = fs.readFileSync("./src/views/CSS/login.css", "utf8");
    res.write(cssfs);
    res.end();
  }
}
