const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Potential error-prone code
    // ... some operations that might throw an error...
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('Error:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});