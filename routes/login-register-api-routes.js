// **********************************************
// login-register-api-routes - Routes for logging in and registering
// **********************************************

// Requiring our models
var db = require("../models");
const crypto = require("crypto");
const utilities = require("../utilities");
// Routes
// =============================================================
module.exports = function (app) {
  // Login route. If successful, will return object containing
  // - status : OK
  // - message : "some message"
  // - sessionUUID : generated session UUID that is also saved in the database
  // Expects:
  // - email
  // - password (clear)
  app.post("/login", function (req, res) {});

  // Registeration route. If successful, will return object containing
  // - status : OK
  // - message : "some message"
  // If error:
  // - status: ERROR
  // - message : "some error message"
  // Expects: firstName, lastName, email, password, confirmPassword, baseCurrencyCode
  app.post("/register", function (req, res) {
    let response = { status: "ERROR", message: "Unknown Error" };
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let baseCurrencyCode = req.body.baseCurrencyCode;
    let confirmPassword = reg.body.confirmPassword;

    if (firstName == null || (firstName = firstName.trim()).length < 1) {
      response["message"] = "Error! Improper First Name field";
    } else if (lastName == null || (lastName = lastName.trim()).length < 1) {
      response["message"] = "Error! Improper Last Name field";
    } else if (email == null || (email = email.trim()).length < 1 || utilities.validateEmail(email) == false) {
      response["message"] = "Error! Improper Email field";
    } else if (password == null || (password = password.trim()).length < 4) {
      response["message"] = "Error! Improper Password field";
    } else if (confirmPassword == null || (confirmPassword = confirmPassword.trim()).length < 4) {
      response["message"] = "Error! Improper Password field";
    } else if (password !== confirmPassword) {
      response["message"] = "Error! Password fields mis-match";
    } else if (baseCurrencyCode == null || baseCurrencyCode === "") {
      baseCurrencyCode = "USD";
    } else {
      // check if email is already in the account table
      db.Account.findAll({
        where: {
          email: email,
        },
      }).then(function (accounts) {
        if (accounts && accounts.length > 0) {
          response["message"] = `Account already exists (${email})`;
        } else {
          response["message"] = `Account (${email}) successfully created`;
          response["status"] = "OK";
          let data = { firstName: firstName, lastName: lastName, email: email, password: password };
          // get the USD to baseCurrency exchange
          db.ExchangeRate.findAll({
            where: { baseCurrencyCode: "USD", targetCurrencyCode: baseCurrencyCode },
          }).then(function (exchange) {
            if (exchange.length != 0) {
              // ===== PAUSE =====
            }
          });
        }
      });
    }
  });
};
