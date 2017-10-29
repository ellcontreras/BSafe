'use strict'

var jwt = require('jwt-simple');
var TokenModel = require('../models/token');

function preguntaContiene(pregunta, texto){
	if(pregunta.indexOf(texto) >= 0){
		return true;
	}
	return false;
}

function responderPregunta(req, res){
	var pregunta = req.body.pregunta.toLowerCase();

	if(preguntaContiene(pregunta,"correo") || preguntaContiene(pregunta, "email")){
		res.status(200).send({
			message: "Si te llegó un correo verifica que provenga de uno de nuestros correos oficiales:\nbanco@bbva.com, mibanco@bbva.com, bancomer@bbva.com"
		});
	}

	if(preguntaContiene(pregunta,"como") && preguntaContiene(pregunta,"hacer") || preguntaContiene(pregunta,"pago") || preguntaContiene(pregunta,"deposito")){
		res.status(200).send({
			message: "Dirigete al menu de la app Bmovil, luego a deposito y selecciona la opción que dice realizar deposito"
		});
	} else {
		if(preguntaContiene(pregunta, "deposito") || preguntaContiene(palabra, "depositar")){
			res.status(200).send({
				message: "Dirigete al menu de la app Bmovil, luego a deposito y selecciona la opción que dice realizar deposito"
			});
		}
	}

	if(preguntaContiene(pregunta,"mensaje") || preguntaContiene(pregunta,"sms") || preguntaContiene(pregunta,"llamada") || preguntaContiene(pregunta,"deposito")){
		res.status(200).send({
			message: "Para evitar fraude por favor revisa que el numero del que llegó el mensaje o llamada esté en nuestra lista de oficiales:\n422456234, 987876238, 098716352, 987457263"
		});
	}
}

function crearToken(req, res){
	var Token = new TokenModel();
	var payload = req.body.payload;

	var token = jwt.crearToken(payload);

	Token.Save((err, token) => {
		if(err){
			throw err;
		} else {
			if(!token) {
				res.status(404).send({});
			}
		}
	})
}

function checarToken(req, res){
	res.status(200).send({message: "El token es correcto"});
}

module.exports = {
	responderPregunta,
}