var express = require('express');
//var path = require('path');
//var router = express.Router();
var folder = 'doc/';

var app = express();

app.use(express.static('doc'));

module.exports = app;
