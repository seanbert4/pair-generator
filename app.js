'use strict'

const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req, res, next) {
	res.redirect('/public/html/index.html');
})

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});