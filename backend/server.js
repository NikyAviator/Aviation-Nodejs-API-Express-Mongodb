const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Powered-By', 'Zatta in da chatta');
  res.write('Hello world!');
  res.end('<h1> Hello again! </h1>');
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  `Server running on port ${PORT}`;
});
