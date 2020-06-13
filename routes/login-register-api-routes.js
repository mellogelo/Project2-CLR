// **********************************************
// login-register-api-routes - Routes for logging in and registering
// **********************************************

// Requiring our models
var db = require("../models");
const crypto = require("crypto");
const utilities = require("../utilities");
const constants = require("../constants");
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
  app.post("/login", function (req, res) {
    console.log("Executing /login (POST)");
    let email = req.body.email;
    let password = req.body.password;
    let response = { status: "OK", message: "Successfully logged in" };

    // ********** REMOVE WHEN ACCESS TO PARAMS WORK
    if (email == null) email = "chikeobi@cox.net";
    if (password == null) password = "password";
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    console.log(`Email:    ${email}`);
    console.log(`Password: ${password}`);

    // check of user is in account database
    let sessionUUID = utilities.generateUUID();
    db.Account.findAll({ where: { email: email } })
      .then(function (accounts) {
        if (accounts == null || accounts.length != 1) throw new Error("No such account");
        console.log(accounts);
        if (accounts[0].dataValues.password != password) throw new Error(`Password mis-match`);
        // update account with new Session ID and update lastLogin and last Transaction
        sessionTime = Date.now();
        db.Account.update(
          { sessionUUID: sessionUUID, transactionTime: sessionTime, lastLoginTime: sessionTime },
          { where: { email: email }, returning: true, plain: true }
        )
          .then(function (account) {
            if (account == null) throw new Error("Unable to update database");
            console.log(account);
            response = { status: "OK", message: "Login successful", sessionUUID: sessionUUID };
            res.json(response);
          })
          .catch(function (error) {
            response = { status: "ERROR", message: error.message };
            res.json(response);
          });
      })
      .catch(function (error) {
        response = { status: "ERROR", message: error.message };
        res.json(response);
      });
  });

  // Registeration route. If successful, will return object containing
  // - status : OK
  // - message : "some message"
  // If error:
  // - status: ERROR
  // - message : "some error message"
  // Expects: firstName, lastName, email, password, confirmPassword, baseCurrencyCode
  app.post("/register", function (req, res) {
    console.log("\n\nRunning /register post method...\n");
    console.log("\nBody Parameters: \n" + req.body);
    console.log("\nURL Params:\n" + req.params);
    let response = { status: "ERROR", message: "Unknown Error" };
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let baseCurrencyCode = req.body.baseCurrencyCode;
    let confirmPassword = req.body.confirmPassword;
    console.log("\nParameters from POST body:");

    // ********** REMOVE WHEN ACCESS TO PARAMS WORK
    // if (firstName == null) firstName = "Chikeobi";
    // if (lastName == null) lastName = "Njaka";
    // if (email == null) email = "chikeobi@cox.net";
    // if (password == null) password = "password";
    // if (confirmPassword == null) confirmPassword = "password";
    // if (baseCurrencyCode == null) baseCurrencyCode = "JPY";
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    console.log(`First Name:        ${firstName}`);
    console.log(`Last Name:         ${lastName}`);
    console.log(`Email:             ${email}`);
    console.log(`Password :         ${password}`);
    console.log(`Base Currency:     ${baseCurrencyCode}`);
    console.log(`Confirm Password:  ${confirmPassword}`);

    if (baseCurrencyCode == null || baseCurrencyCode === "") baseCurrencyCode = "USD";

    if (firstName == null || (firstName = firstName.trim()).length < 1) {
      response["message"] = "Error! Improper First Name field";
      res.json(response);
    } else if (lastName == null || (lastName = lastName.trim()).length < 1) {
      response["message"] = "Error! Improper Last Name field";
      res.json(response);
    } else if (email == null || (email = email.trim()).length < 1 || utilities.validateEmail(email) == false) {
      response["message"] = "Error! Improper Email field";
      res.json(response);
    } else if (password == null || (password = password.trim()).length < 4) {
      response["message"] = "Error! Improper Password field";
      res.json(response);
    } else if (confirmPassword == null || (confirmPassword = confirmPassword.trim()).length < 4) {
      response["message"] = "Error! Improper Password field";
      res.json(response);
    } else if (password !== confirmPassword) {
      response["message"] = "Error! Password fields mis-match";
      res.json(response);
    } else {
      // check if email is already in the account table
      console.log(`Running query to check if ${email} is in Account database`);
      db.Account.findAll({
        where: {
          email: email,
        },
      })
        .then(function (accounts) {
          console.log(accounts);
          if (accounts && accounts.length > 0) {
            response["message"] = `Account already exists (${email})`;
            res.json(response);
          } else {
            response["message"] = `Account (${email}) successfully created`;
            response["status"] = "OK";
            let data = { firstName: firstName, lastName: lastName, email: email, password: password };
            // get the USD to baseCurrency exchange
            db.ExchangeRate.findAll({
              where: { baseCurrencyCode: "USD", targetCurrencyCode: baseCurrencyCode },
            })
              .then(function (exchange) {
                if (exchange.length != 0) {
                  let rate = exchange[0].dataValues.rate;
                  let initialAmount = constants.INITIAL_INVESTMENT_AMOUNT_USD * rate;
                  let accountData = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    baseCurrencyCode: baseCurrencyCode,
                    initialAmount: initialAmount,
                  };
                  console.log(`Creating the following account: ${accountData}`);
                  db.Account.create(accountData).then(function (account) {
                    console.log("\n\nAccount:");
                    console.log(account);
                    console.log("\n\nResponse:");
                    console.log(response);
                    res.json(response);
                  });
                }
              })
              .catch(function (error) {
                console.log(error);
                response["status"] = "ERROR";
                response["message"] = `Database error. Cannot create account for ${email}`;
                res.json(response);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
          response["status"] = "ERROR";
          response["message"] = `Database error. Cannot create account for ${email}`;
          res.json(response);
        });
    }
  });
};
