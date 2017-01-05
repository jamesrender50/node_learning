const http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
    console.log(`request for ${req.url}`);
    res.write("<html><head><title>Example page</title></head><body><h1>Example page</h1></body></html>");
    res.end();
});

server.listen(8080, '127.0.0.1');