import http from 'http';

const port = process.env.PORT || 5500; // lowercase 'port'

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from mars');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // use lowercase 'port'
});

