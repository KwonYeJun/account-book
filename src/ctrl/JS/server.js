import http from 'http';

const server = http.createServer((req, res) => {

if(req.method === 'GET'){

}

  
});

server.listen(2222, error => { console.log(error) });