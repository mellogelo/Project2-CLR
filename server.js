var fs = require("fs");
var path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require("express-handlebars");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars");

require("./routes/api-routes")(app)
require('./routes/html-routes')(app)

app.listen(port, ()=> console.log('yay working!'))

// Routes
// =============================================================
