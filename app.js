var express = require('express');
 	http = require('http'),
    path = require('path'),
    bodyParser= require('body-parser');

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.normalize(__dirname + '/')));

//parsing salida
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


// server headers
app.use(function (req, res, next) {

 	res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.use(require('./routes'));


app.get('/', function(req, res,next) {
    res.send('API de eventos');
});

var server = app.listen(port, function() {
    console.log("App is running on port " + port);
});

module.exports = app;