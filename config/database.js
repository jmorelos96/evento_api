var express 	= require('express');
var mysql 		= require('mysql');


var connection = mysql.createConnection({
  host      : 'axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user      : 'k2lxkuqylygthqt3',
  password  : 'g9jhfvp87y5d5lqu',
  port    : '3306'
});

module.exports = connection;