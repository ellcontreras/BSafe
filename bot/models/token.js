'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TokenSchema = schema({
	codigo: String
});


module.exports = mongoose.model('Token', TokenSchema);