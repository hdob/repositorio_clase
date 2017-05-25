var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROYECTO DE PRUEBA HECTOR DOBLADO' });

router.get('/contacto', function(req, res, next) {
  res.render('contacto',{"img": "/images/imagen1.jpg" });
  });
});

module.exports = router;
