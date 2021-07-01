const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to our homepage');
})

server.listen(5000)