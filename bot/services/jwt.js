'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'bancomer'

exports.createToken = function(user) {
	var payload = {
		
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix
	};

	return jwt.encode(payload, secret);
};