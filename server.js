import http from 'http';


const PORT = process.env.PORT || 5500 // process is a global Object. env are variables not defined within our code such as the PORT number. PORT is a defined env variable. if no process.env.PORT exist, use our own 5500. This is what the code means

// createServer() create and returns an http.Server object.

//anonymous fun inside createServer() is called requestLister

//req = http.ServerRequest
// res = http.ServerResponse
 const server = http.createServer((req,res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'content-length': '123',
    'connection': 'keep-alive',
    'accept': '*/*'
  })
  //http.ServerResponse.end('data', 'encoding')
  // res.end('Hello, World wide!\n')
 // or simply
 res.write('Hello world');
 res.end()
}).listen(5500)

//server.listen(port, hostname, callback)
/**
 * example: 
 * server.listen(5500, '0.0.0.0', () => {
 *           console.log('Server is running')
 *          })
 */
console.log('Server running on 5500')










// const server = http.createServer((req,res) => {
 
//   try {
//     // Check if its a GET request
//     if (req.method === 'GET'){
//   // simple router
//   if(req.url === '/'){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>Homepage</h1>')
//   } else if(req.url === '/about'){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>About</h1>')
//   } else {
//     res.writeHead(404,{'Content-Type': 'text/html'});
//     res.end('<h1>Not Found</h1>')
//   }
//     }else {
//       throw Error("Method not allowed")
//     }
//   } catch(error) {
//     res.writeHead(500, {'Content-Type': 'text/html'})
//     res.end('<h1>server error</h1>')
//   }



// });

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })