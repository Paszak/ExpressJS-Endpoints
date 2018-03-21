var express = require('express');
var app = express();

app.get('/:id', function (req,res) {
	console.log('Otrzymałem żadanie GET do strony głównej')
	res.send('Identyfikator , który zotał dopisany to ' + req.params.id);
});

app.listen(3000);