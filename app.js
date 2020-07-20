/*jslint node: true */
/*jshint esversion: 6 */

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('demo_jquery.html', function(err, data) {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
