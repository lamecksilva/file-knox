var host = '0.0.0.0';
var port = 5000;
var express = require('express');

var app = express();
app.use(express.static(__dirname + "/public"));

app.get('/', function (request, response) {
    response.sendfile('public/index.html');
});

app.listen(port, host);
console.log(`Server running in ${host}:${port}`);
console.log(`No Alpha, 192.168.25.8:5000 `);
console.log(`No Beta, 192.168.25.6:5000`);