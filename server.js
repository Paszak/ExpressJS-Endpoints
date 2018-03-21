var express = require('express');
var app = express();

app.get('/', function (req,res) {
	console.log('Otrzymałem żadanie GET do strony głównej')
	res.send('Hello GET!');
});

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego , czego żądasz!')
});

app.listen(3000);