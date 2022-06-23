'use strict';
var http = require('http');
var index = require('./index');

var server = http.createServer();


server.on('request', index.mensaje);
 
server.listen(3000, function () {
  	console.log('La Aplicación está funcionando en el puerto 3000');
});

