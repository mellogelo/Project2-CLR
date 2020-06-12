var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index")
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/login", function(req, res) {
    res.render("login")
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/signup", function(req, res) {
    res.render("signup")
  });

};
