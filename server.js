var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var stringifFile;

app.use(bodyParser.json());
app.get('/getNote', function (req,res) {
	fs.readFile('./test.json', 'utf-8', function (err, data) {
		if (err) throw err;
		stringifFile = data;
		res.send(data);
	});
});

app.post('/updateNote/:note', function (req,res) {
	fs.appendFile('./test.json', req.params.note, function (err) {
		if (err) throw err;
		console.log('file update');
		res.send();
	});
});

app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego , czego żądasz!')
});

app.listen(3000);