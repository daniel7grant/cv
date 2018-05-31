const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 8082;

app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public/static')));

app.get(['/', '/en'], function(req, res){
	res.sendFile(path.join(__dirname, 'public/dist/en.html'));
});

app.get('/hu', function(req, res){
	res.sendFile(path.join(__dirname, 'public/dist/hu.html'));
});

app.get('/404', function(req, res){
	res.sendFile(path.join(__dirname, 'public/dist/404.html'));
});

app.get('*', function(req, res){
	res.redirect('/404');
})

app.listen(PORT, function(){
	console.log('cv.danielgrants.com is running on port ' + PORT);
});
