var express 	= require('express');
var mysql 		= require('mysql');


var connection = mysql.createConnection({
  host      : 'host',
  user      : 'user',
  password  : 'pass',
  port    : '3306'
});

module.exports = connection;
