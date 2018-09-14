let http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = process.env.PORT || 8080;

var server = http.createServer();

server.listen(port);
console.log("Server is listening to 8080");



