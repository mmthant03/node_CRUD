let http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = process.env.PORT || 8080,
    pg = require('pg');

const { Pool } = require ('pg');
const connectionUrl = "postgres://ibnjwjnapcjvcr:1d41a1aaa840057cc68cdbd23f0185da6f9da8c4d21ff24a3dfb5cbdcb4dd1fb@ec2-54-83-4-76.compute-1.amazonaws.com:5432/dlhmluld3r1p9";
    
const pool = new Pool({
    connectionString : connectionUrl,
    ssl: true,
});
    
pool.connect();




var server = http.createServer(function (req, res) {
    var uri = url.parse(req.url)

    switch ( uri.pathname ) {
        case '/':
            sendFile(res, 'public/index.html');
            break;
        case '/index.html':
            sendFile(res, 'public/index.html');
            break;
        default:
            res.end('404 not found')
    }
});


server.listen(port);
console.log("Server is listening to 8080");

function sendFile(res, filename, contentType) {
    contentType = contentType || 'text/html';

    fs.readFile(filename, function(error, content) {
        if(error) {
            console.log(error);
        }
        else {
            res.writeHead(200, {'Content-type' : contentType});
            res.end(content, 'utf-8');
        }
    })

}



