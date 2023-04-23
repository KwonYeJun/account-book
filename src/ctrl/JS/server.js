import http from 'http';

const server = http.createServer((req, res) => {

if(req.method === 'GET'){

}
if(req.method === 'POST'){}
  
});

server.listen(2222, error => { console.log(error) });