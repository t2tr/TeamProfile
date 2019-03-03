var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

const PORT=3000; 

fs.readFile('./default.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.setHeader('Content-Type', 'text/html');
        response.write(html);  
        response.end();  
    }).listen(PORT);
});