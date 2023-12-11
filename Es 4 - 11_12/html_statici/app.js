const path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/suv', function(req, res){
    res.sendFile(path.join(__dirname, 'm_suv.html'))
});

app.get('/sportive', function(req, res){
    res.sendFile(path.join(__dirname, 'm_sportive.html'))
});

app.get('/compatte', function(req, res){
    res.sendFile(path.join(__dirname, 'm_compatte.html'))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});