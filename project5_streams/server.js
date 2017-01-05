const net = require('net');

var server = net.createServer();

//duplex stream, writes and reads
server.on('connection', (socket) => {
    socket.write('Connected to server');
    socket.setEncoding('utf8');
    socket.on('data', (data)=>{
        console.log('Server data: ');
        console.log(data);
        socket.write('Data handled by server');
    });
});

server.listen(5000, '127.0.0.1');

var socket = new net.Socket();
var client = socket.connect(5000, '127.0.0.1');
client.setEncoding('utf8');

client.on('connect', () => {
    client.write('Client sending to server, hello server from client');
});

client.on('data', (data) => {
    console.log('Client data: ');
    console.log(data);
});

setTimeout(() => {
    client.end();
    server.close();
}, 1000);