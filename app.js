const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title> My first page </title></head><body><h1>Hello from my first Node.js Server!</h1></body></html>');
    res.end();
});

server.listen(3000);