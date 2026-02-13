import http from 'http';

const port = process.env.port || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Isaac')
})

server.listen(port, () => {
  console.log('Server listening on port: 5000')
})



//
// const port = process.env.PORT || 5500; //if port is undefined then port = 5500
// const server = http.createServer((req, res) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello from ngabo');
// });
//
// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`); // use lowercase 'port'
// });
