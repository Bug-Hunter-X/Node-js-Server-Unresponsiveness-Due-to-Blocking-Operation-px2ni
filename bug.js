const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Busy wait
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});