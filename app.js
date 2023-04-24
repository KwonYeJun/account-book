import server from './src/ctrl/JS/server.js';

server.listen(2222, (error) => {
  console.log(error);
});

console.log(server);