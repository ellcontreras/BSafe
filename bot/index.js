'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var puerto = 3232;

//Creamos la conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/bot', (err, res ) => {
	if(err) {
		throw err;
	} else {
		console.log("La conexión a la base de datos está corriendo correctamente...");

		app.listen(puerto, function(){
			console.log("Servidor del escuchando en http://localhost:3232");
		});
	}
});
