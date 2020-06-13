// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // index route loads login-registration.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login-registration.html"));
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });
};
