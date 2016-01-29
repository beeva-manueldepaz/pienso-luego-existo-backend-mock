var express = require('express');
var _ = require('lodash');
var J = require('jmespath');

var router = express.Router();

var piensos = [
		{ pienso: { id: 1, marca: "Perrina", modelo: "Junior Pro", peso: 2.5, precio: 5.99, descripcion: "Indicado para perros jovenes", fCaducidad: "1453912360", logo: "sdfasdfasf" } },
		{ pienso: { id: 2, marca: "Akana", modelo: "Junior Pro", peso: 2.5, precio: 5.99, descripcion: "Indicado para perros jovenes", fCaducidad: "1453912360", logo: "sdfasdfasf" } },
		{ pienso: { id: 3, marca: "Firskies", modelo: "Perros Minor", peso: 300, precio: 60, descripcion: "Friskies, para perros canijos", fCaducidad: 1453999136 } },
		{ pienso: { id: 4, marca: "Firskies", modelo: "Perros grandes", peso: 600, precio: 49.99, descripcion: "Friskies, para perros de verdad", fCaducidad: 1485535136 } },
		{ pienso: { id:5, marca: "McPerris", modelo: "Plus", peso: 1000, precio: 35.99, descripcion: "Para los más perros", fCaducidad: 1456591136 } },
		{ pienso: { id: 6, marca: "Doggie", modelo: "Adulto", peso: 100, precio: 43.80, descripcion: "Para perrear", fCaducidad: 1454517536 } }
	];

/* GET piensos listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(piensos);

});

router.get('/:id', function(req, res, next) {

	var id = parseInt(req.params.id);
	var reply = _.find(piensos, {pienso:{id:id}}) || { pienso: {}} ;

	res.status(200).send(reply);

});




module.exports = router;
