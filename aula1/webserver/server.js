/**
 * static webserver
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
var server;
var extensions = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/js',
  '.json': 'application/json'
};

server = http.createServer(function(request, response) {
  var fileStream = fs.createReadStream(request.url.split('/')[1]);
  fileStream.on('error', function(error){
    if (error === 'ENOENT') {
        response.statusCode = 404;
        response.end(http.STATUS_CODES[404]);
    }
    else {
        response.statusCode = 500;
        response.end(http.STATUS_CODES[500]);
    }
  });

  var extension = path.extname(request.url);
  var contentType = extensions[extension] || 'text/plain';
  response.writeHead(200, {
    "Content-type": contentType
  });

  /*** canalização */
  /*** readable streams */
  fileStream.pipe(response);
});

server.listen(3000, function () {
  console.log('http://localhost:3000');
});
