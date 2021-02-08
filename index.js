const path = require('path');
var http = require('http');
var fs = require('fs');
var writeStream = fs.createWriteStream('./sampleJson.csv');
writeStream.on('error', function (err) {
  console.log(err);
});

http.createServer(function(req, res) {
  req.pipe(writeStream);
}).listen(8080);