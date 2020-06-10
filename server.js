var fs = require("fs");
var path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require("express-handlebars");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


var env = process.env.NODE_ENV || "development";

var config = require(__dirname + "/config/config.js")[env];

console.log(config);

app.listen(PORT, ()=> console.log('yay working!'))