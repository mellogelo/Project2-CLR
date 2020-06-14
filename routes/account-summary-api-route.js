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
   * Account Summary Route
   * Expects:
   * - sessionUUID - ID for session obtained upon login
   *
   * Returns: Upon success, returns
   * {
   *   status: 'OK'
   *   message: 'Account summary'
   *   sessionUUID: <sessionUUID>
   *   summary:{
   *   baseCurrency: <>,
   *   initialAmount: <initial amount in baseCurrency>
   *   currentAccountValue: <current account value in baseCurrency>
   *   positions: {
   *      <currencyCode: amount>
   *      <currencyCode: amount>
   *   },
   *   rates:{
   *      <currencyCode: rate>
   *      <currencyCode: rate>
   *   }
   * }
   */

  app.post("/accountSummary", function (req, res) {
    console.log(`Executing ${req.baseUrl} (${req.method}) using protocol ${req.protocol}`);
    // check sessionUUID and see if it is valid and "active"
    let sessionUUID = req.body.sessionUUID;
    let response = {};
    if (sessionUUID == null || sessionUUID === "") {
      response = { status: "ERROR", message: "ERROR!! No SessionUUID provided!" };
      res.json(response);
      return;
    }
    // get account for the sessionUUID
    (async () => {
      let dbUsers = await db.Account.findAll({
        where: {
          sessionUUID: sessionUUID,
        },
      });
      if (dbUsers == null || dbUsers.length != 1) {
        response = { status: "ERROR", message: "ERROR!! SessionUUID is not found!" };
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
        response = { status: "ERROR", message: "ERROR!! Session timeout" };
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
      // now get the positions for the user
      let dbPositions = await db.Position.findAll({
        where: {
          accountUUID: accountUUID,
        },
      });
      response = { status: "OK", sessionUUID: sessionUUID, message: "Account Summary" };
      let summary = { baseCurrency: baseCurrency, initialAmount: initialAmount, currentAccountValue: 0.0 };
      let positions = {};
      if (dbPositions != null && dbPositions.length != 0) {
        let pos;
        for (let index = 0; index < dbPositions.length; index++) {
          pos = dbPositions[index];
          positions[pos.currencyCode] = pos.amount;
        }
        summary["positions"] = positions;
      }
      let rates = {};
      // get rates
      let dbRates = await db.ExchangeRate.findAll({ where: { baseCurrencyCode: baseCurrency } });
      if (dbRates != null && dbRates.length != 0) {
        for (let index = 0; index < dbRates.length; index++) {
          let rate = dbRates[index];
          rates[rate.targetCurrencyCode] = rate.rate;
        }
      }
      summary["rates"] = rates;
      response["summary"] = summary;
      // calculate current account value based on current exhcnage rates
      let currentAccountValue = 0.0;
      if (positions != null) {
        let codes = Object.keys(positions);
        for (let index = 0; index < codes.length; index++) {
          let code = codes[index];
          let amount = positions[code];
          let exchange = rates[code];
          let value = amount / exchange;
          currentAccountValue += value;
        }
        summary["currentAccountValue"] = currentAccountValue;
      }
      res.json(response);
    })();
  });
};
