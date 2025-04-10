import express from 'express'; // Express - модуль для маршрутизации и обработки запросов от клиентов
var app = express();
var http = require('http').Server(app);
/* часть 2    */
var io = require('socket.io')(http); // вставьте это после определения http 

// Serve the index page 
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

// Listen on port 5000
app.set('port', (process.env.PORT || 5000));
http.listen(app.get('port'), function(){
  console.log('listening on port',app.get('port'));
});


