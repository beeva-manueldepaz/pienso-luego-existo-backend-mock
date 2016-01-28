var express = require('express');
var bodyParser = require('body-parser');

var port = normalizePort(process.env.PORT || '3000');
var app = express();
	app.set('port', port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var piensos = require('./piensos');

app.use('/piensos',piensos);

app.get('/', function(req, res, next) {
  res.status(200).send({error: 'You should not be here!'});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function normalizePort(val) {
  
  var port = parseInt(val, 10);

  if (isNaN(port)) { return val;  }
  if (port >= 0) { return port;  }

  return false;
}