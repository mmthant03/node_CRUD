let http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = process.env.PORT || 8080,
    pg = require('pg');

// Database Connection
const { Pool } = require('pg');
const connectionUrl = "postgres://ibnjwjnapcjvcr:1d41a1aaa840057cc68cdbd23f0185da6f9da8c4d21ff24a3dfb5cbdcb4dd1fb@ec2-54-83-4-76.compute-1.amazonaws.com:5432/dlhmluld3r1p9";

const pool = new Pool({
    connectionString: connectionUrl,
    ssl: true,
});

pool.connect();

// Connecting to the server
var server = http.createServer(function (req, res) {
    var uri = url.parse(req.url)
    console.log(req.method + "  " + uri.pathname);

    switch (uri.pathname) {
        case '/':
            sendFile(res, 'public/index.html');
            break;
        case '/index.html':
            sendFile(res, 'public/index.html');
            break;
        case '/style.css':
            sendFile(res, 'public/css/style.css');
            break;
        case '/bagan.jpg':
            sendFile(res, 'public/css/bagan.jpg');
            break;
        case '/GrandCanyon.jpg':
            sendFile(res, 'public/css/GrandCanyon.jpg');
            break;
        case '/create':
            createData(req, res);
            break;
        // case '/upload':
        //     uploadData(req, res);
        //     break;
        case '/read':
            readData(res);
            break;
        case '/update':
            updateData(req, res);
            break;
        case '/delete':
            deleteData(req, res);
            break;
        default:
            res.end('404 not found');
    }
});


server.listen(port);
console.log("Server is listening to 8080");


// serve local files to server
function sendFile(res, filename, contentType) {
    contentType = contentType || 'text/html';

    fs.readFile(filename, function (error, content) {
        if (error) {
            console.log(error);
        }
        else {
            res.writeHead(200, { 'Content-type': contentType });
            res.end(content, 'utf-8');
        }
    })

}

// generate a unique ID based on data time
function generateId() {
    return Date.now().toString(36);
}

// extract data from sent request and save data to database
function createData(req, res) {
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        body = JSON.parse(body);
        console.log(body.img);
        save(body);
        res.end()
    })
}

// function uploadData(req, res) {
//     let body = []
//     req.on('data', (chunk) => {
//         body.push(chunk)
//     }).on('end', () => {
//         //body = Buffer.concat(body).toString()
//         //body = JSON.parse(body);
//         console.log(body.img);
//         //save(body);
//         res.end();
//     })
// }

// save data to database
async function save(data) {
    let id = generateId();
    let name = data.name;
    let country = data.country;
    let queryText = "INSERT INTO public.destination(id, name, country) VALUES('" + id + "','" + name + "','" + country + "');";
    try {
        let data = await pool.query(queryText);
    } catch (err) {
        console.log(err);
    }
}

// read data from database
async function readData(res) {
    let queryText = "SELECT * FROM public.destination;";
    try {
        let data = await pool.query(queryText);
        res.end(JSON.stringify(data.rows));
    } catch (err) {
        console.log(err);
    }
}

// update a specific data to database
function updateData(req, res) {
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        body = JSON.parse(body);
        update(body);
        res.end()
    })
}

// update data to database
async function update(data) {
    let id = data.id;
    let name = data.name;
    let country = data.country;
    let description = data.description;

    let queryText = "UPDATE public.destination SET name = '" + name + "', country = '" + country + "', description = '" + description + "' WHERE id ='" + id + "';";
    console.log(queryText);
    try {
        let data = await pool.query(queryText);
    } catch (err) {
        console.log(err);
    }
}

// delete one specific row
function deleteData(req, res) {
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        remove(body, res);
    })
}

// delete row from database
async function remove(data, res) {
    let id = data.id;

    let queryText = "DELETE FROM public.destination WHERE id = '" + id + "' RETURNING *;";
    try {
        let data = await pool.query(queryText);
        res.end(JSON.stringify(data.rows[0]));
    } catch (err) {
        console.log(err);
    }
}