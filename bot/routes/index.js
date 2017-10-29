var express = require('express');
var router = express.Router();
var BSafe = require('../controllers/BSafe');

/* GET home page. */
router.post('/', BSafe.responderPregunta);

module.exports = router;