// create a web server and listen for incoming requests
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    // parse the url
    const parsedUrl = url.parse(req.url, true);

    // extract the path
    let path = parsedUrl.pathname;
    path = path.replace(/^\/+|\/+$/g, '');

    // extract the query string as an object
    const queryStringObject = parsedUrl.query;

    // extract the HTTP method
    const method = req.method.toLowerCase();

    // log the request path
    console.log(`Request received on path: ${path} with method: ${method} and with these query string parameters:`, queryStringObject);

    // send the response
    res.end('Hello World\n');
});

// start the server
server.listen(3000, () => {
    console.log('The server is up and running now');
});

// define the handlers
const handlers = {};

// sample handler
handlers.sample = (data, callback) => {
    // callback a http status code, and a payload object
    callback(406, {'name': 'sample handler'});
};

// not found handler
handlers.notFound = (data, callback) => {
    callback(404);
};

// define a request router
const router = {
    'sample': handlers.sample
};