'use strict'

//cargar modulos de node para crear un servidor

var express = require('express');
var bodyParse = require('body-parser');
const bodyParser = require('body-parser');



var app = express();

var article_routes = require('./routes/articles');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', article_routes);



module.exports = app;
