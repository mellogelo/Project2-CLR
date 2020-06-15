// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // index route loads login-registration.html
  app.get("/", function (req, res) {
    console.log("\n\nRunning Index route\n");
    res.sendFile(path.join(__dirname, "../public/login-registration.html"));
  });

};
