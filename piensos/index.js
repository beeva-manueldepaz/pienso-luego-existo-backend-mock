var express = require('express');
var router = express.Router();

/* GET piensos listing. */
router.get('/', function(req, res, next) {


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
    }
  ];

  res.status(200).send(piensos);

});

router.get('/:id', function(req, res, next) {
  res.send({
    id: 1,
    marca: "Purina",
    modelo: "Junior Pro",
    peso: 2.5,
    precio: 5.99,
    descripcion: "Indicado para perros jovenes",
    fCaducidad: "1453912360",
    logo: "sdfasdfasf"
  });
});

module.exports = router;
