// **********************************************
// account-summary-api-route - Processes Account Summary POST request
// **********************************************

// Requiring our models
"use strict";
var db = require("../models");
const crypto = require("crypto");
const utilities = require("../utilities");
const constants = require("../constants");
// Routes
// =============================================================
module.exports = function (app) {
  /**
   * Buy Currency using base currency
   * Expects:
   * - sessionUUID - Session UUID
   * - currencyCode - The code of the currency to be purchased using the position amount of the base currency
   * - amount - Amount of base currency to use in purchasing the target currency. If this is more than the
   *   amount of base currency left, it will result in error
   */
  app.post("/trade/buy", function (req, res) {
    console.log(`Executing ${req.baseUrl} (${req.method}) using protocol ${req.protocol}`);
    // check sessionUUID and see if it is valid and "active"
    let sessionUUID = req.body.sessionUUID;
    let currencyCode = req.body.currencyCode;
    let amount = req.body.amount;
    let response = {};
    if (sessionUUID == null || sessionUUID === "") {
      response = { status: "ERROR", message: "ERROR!! No SessionUUID provided!" };
      res.json(response);
      return;
    }
  });

  /**
   *
   */
  app.post("/trade/sell", function (req, res) {
    console.log(`Executing ${req.baseUrl} (${req.method}) using protocol ${req.protocol}`);
    // check sessionUUID and see if it is valid and "active"
    let sessionUUID = req.body.sessionUUID;
    let response = {};
    if (sessionUUID == null || sessionUUID === "") {
      response = { status: "ERROR", message: "ERROR!! No SessionUUID provided!" };
      res.json(response);
      return;
    }
  });
};
