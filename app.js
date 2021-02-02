const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req);
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title> Input your name </title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
        return res.end();    
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title> My first page </title></head><body><h1>Hello from my first Node.js Server!</h1></body></html>');
    res.end();
});

server.listen(3000);