var fs = require("fs");
var path = require("path");

var env = process.env.NODE_ENV || "development";

var config = require(__dirname + "/config/config.js")[env];

console.log(config);