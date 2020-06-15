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
    let tradeAmount = req.body.amount;
    let response = {};
    if (sessionUUID == null || sessionUUID === "") {
      response = { status: "ERROR", message: "ERROR!! No Session UUID provided!" };
      res.json(response);
      return;
    }
    if (currencyCode == null || currencyCode == "") {
      response = { status: "ERROR", message: "ERROR!! Currency Code is invalid!", sessionUUID: sessionUUID };
      res.json(response);
      return;
    }
    if (tradeAmount == null || isNaN(tradeAmount)) {
      response = { status: "ERROR", message: "ERROR!! Amount is invalid!", sessionUUID: sessionUUID };
      res.json(response);
      return;
    }
    (async () => {
      //get the account information and check session time
      let dbUsers = await db.Account.findAll({
        where: {
          sessionUUID: sessionUUID,
        },
      });
      if (dbUsers == null || dbUsers.length != 1) {
        response = { status: "ERROR", message: "ERROR!! SessionUUID is not found!", sessionUUID: sessionUUID };
        res.json(response);
        return;
      }
      console.log(dbUsers);
      let dbUser = dbUsers[0];
      let dbXactionTime = dbUser.transactionTime;
      let accountUUID = dbUser.uuid;
      let baseCurrency = dbUser.baseCurrencyCode;
      //let initialAmount = dbUser.initialAmount;
      let sessionTimoutMilli = process.env.SESSION_TIMEOUT_MILLI || constants.SESSION_TIMEOUT_MILLI;
      // check if action was within the timeout period
      if (dbXactionTime == null || dbXactionTime == "") dbXactionTime = Date.now();
      let xactionTime = Date.now();
      if (dbXactionTime + sessionTimoutMilli < xactionTime) {
        response = { status: "ERROR", message: "ERROR!! Session timeout", sessionUUID: sessionUUID };
        // go back to login page
        // res.redirect('/');
        res.json(response);
        return;
      }
      // update the account and set new transaction time
      dbUsers = await db.Account.update(
        { transactionTime: xactionTime },
        { where: { sessionUUID: sessionUUID }, returning: true, plain: true }
      );

      // now check if user has enough of base currency in positions
      let positions = await db.Position.findAll({ where: { accountUUID: accountUUID } });
      if (positions == null || positions.length < 1) {
        response = {
          status: "ERROR",
          message: `No position or amount found for base currency ${baseCurrency}`,
          sessionUUID: sessionUUID,
        };
        res.json(response);
        return;
      }
      console.log(positions[0].dataValues);
      res.json(positions);
    })();
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
    if (currencyCode == null || currencyCode == "") {
      response = { status: "ERROR", message: "ERROR!! Currency Code is invalid!", sessionUUID: sessionUUID };
      res.json(response);
      return;
    }
    if (amount == null || isNaN(amount)) {
      response = { status: "ERROR", message: "ERROR!! Amount is invalid!", sessionUUID: sessionUUID };
      res.json(response);
      return;
    }
    (async () => {
      //get the account information and check session time
      let dbUsers = await db.Account.findAll({
        where: {
          sessionUUID: sessionUUID,
        },
      });
      if (dbUsers == null || dbUsers.length != 1) {
        response = { status: "ERROR", message: "ERROR!! SessionUUID is not found!", sessionUUID: sessionUUID };
        res.json(response);
        return;
      }
      console.log(dbUsers);
      let dbUser = dbUsers[0];
      let dbXactionTime = dbUser.transactionTime;
      let accountUUID = dbUser.uuid;
      let baseCurrency = dbUser.baseCurrencyCode;
      let initialAmount = dbUser.initialAmount;
      let sessionTimoutMilli = process.env.SESSION_TIMEOUT_MILLI || constants.SESSION_TIMEOUT_MILLI;
      // check if action was within the timeout period
      if (dbXactionTime == null || dbXactionTime == "") dbXactionTime = Date.now();
      let xactionTime = Date.now();
      if (dbXactionTime + sessionTimoutMilli < xactionTime) {
        response = { status: "ERROR", message: "ERROR!! Session timeout", sessionUUID: sessionUUID };
        // go back to login page
        // res.redirect('/');
        res.json(response);
        return;
      }
      // update the account and set new transaction time
      dbUsers = await db.Account.update(
        { transactionTime: xactionTime },
        { where: { sessionUUID: sessionUUID }, returning: true, plain: true }
      );
    })();
  });
};
