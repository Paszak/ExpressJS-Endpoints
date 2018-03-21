var express = require('express');
var app = express();

app.get('/', function (req,res) {
	console.log('Otrzymałem żadanie GET do strony głównej')
	res.send('Hello GET!');
});

app.post('/', function (req,res) {
	console.log('Otrzymałem żadanie POST do strony głównej')
	res.send('Hello POST!');
});

app.delete('/del_user', function (req,res) {
	console.log('Otrzymałem żadanie DELETE do strony głównej')
	res.send('Hello DELETE!');
});

app.get('/list_user', function (req,res) {
	console.log('Otrzymałem żadanie GET do strony /list_user')
	res.send('Strona z listą użytkowników');
});

app.get('/ab*cd', function (req,res) {
	console.log('Otrzymałem żadanie GET do strony ab*cd')
	res.send('Wzór pasuje');
});

var server = app.listen(3000, function () {
	console.log('przykładowa aplikacja')
});