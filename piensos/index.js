var express = require('express');
var router = express.Router();

var piensos = [
    {
      id: 1,
      marca: "Purina",
      modelo: "Junior Pro",
      peso: 2.5,
      precio: 5.99,
      descripcion: "Indicado para perros jovenes",
      fCaducidad: "1453912360",
      logo: "sdfasdfasf"
    },
    {
      id: 2,
      marca: "acANA",
      modelo: "Junior Pro",
      peso: 2.5,
      precio: 5.99,
      descripcion: "Indicado para perros jovenes",
      fCaducidad: "1453912360",
      logo: "sdfasdfasf"
    },
    {
	  id:3,
	  marca: "Friskies",
	  modelo: "Perros enanos",
	  peso: 300,
	  precio: 60,
	  descripcion: "Friskies, para perros canijos",
	  fCaducidad: 1453999136
	 },
	 {
	  id:4,
	  marca: "Firskies",
	  modelo: "Perros grandes",
	  peso: 600,
	  precio: 49.99,
	  descripcion: "Friskies, para perros de verdad",
	  fCaducidad: 1485535136
	 },
	 {
	  id:5,
	  marca: "McPerris",
	  modelo: "Plus",
	  peso: 1000,
	  precio: 35.99,
	  descripcion: "Para los más perros",
	  fCaducidad: 1456591136
	 },
	 {
	  id:6,
	  marca: "Doggie",
	  modelo: "Adulto",
	  peso: 100,
	  precio: 43.80,
	  descripcion: "Para perrear",
	  fCaducidad: 1454517536
	}
  ]



/* GET piensos listing. */
router.get('/', function(req, res, next) {

  res.status(200).send(piensos);

});

router.get('/:id', function(req, res, next) {
 
    var len = piensos.length;
	var resul = "Elemento no encontrado";    
    for(var i = 0; i<len; i++){
        var item = piensos[i];

        if(item.id === parseInt(req.params.id)) {
        	resul = item;
        	break;
        };
    }

    res.status(200).send(resul);

});




module.exports = router;
