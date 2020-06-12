var fs = require("fs");
var path = require("path");
const express = require("express");
const https = require("https");
require("dotenv").config();
const enigma = require("./security/newencryption");

const app = express();
const handlebars = require("express-handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static directory
app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let db = require("./models");

// // set express server port
// let serverPort = process.env.SERVER_PORT_HTTP || 8080;
// let httpProtocol = "http";
// console.log(`USE_HTTPS ==> ${process.env.USE_HTTPS}`);
// if (process.env.USE_HTTPS == "true") {
//   serverPort = process.env.SERVER_PORT_HTTPS || 442;
//   httpProtocol = "https";
//   console.log("\n\n*********\nHTTPS\n***********");
//   https
//     .createServer(
//       {
//         key: fs.readFileSync("./security/server.key"),
//         cert: fs.readFileSync("./security/server.cert"),
//       },
//       app
//     )
//     .listen(serverPort, function () {
//       let url = `${httpProtocol}://${serverHost}:${serverPort}`;
//       console.log(`Server listening on port ${serverPort}. Go to ${url}`);
//     });
// }

// Routes
// ==============================================
require("./routes/html-routes.js")(app);

let serverHost = process.env.SERVER_HOST || "localhost";

function runServer() {
  // **************************** */
  // set express server port
  let serverPort = process.env.SERVER_PORT_HTTP || 8080;
  let httpProtocol = "http";
  console.log(`USE_HTTPS ==> ${process.env.USE_HTTPS}`);
  if (process.env.USE_HTTPS == "true") {
    serverPort = process.env.SERVER_PORT_HTTPS || 442;
    httpProtocol = "https";
    console.log("\n\n*********\nHTTPS\n***********");
    https
      .createServer(
        {
          key: fs.readFileSync("./security/server.key"),
          cert: fs.readFileSync("./security/server.cert"),
        },
        app
      )
      .listen(serverPort, serverHost, function () {
        let url = `${httpProtocol}://${serverHost}:${serverPort}`;
        console.log(`Server listening on port ${serverPort}. Go to ${url}`);
      });
  }

  // **************************** */
  else {
    app.listen(serverPort, serverHost, function () {
      let url = `${httpProtocol}://${serverHost}:${serverPort}`;
      console.log(`Server listening on port ${serverPort}. Go to ${url}`);
    });
  }
}

function updateCurrencyTable(db) {
  console.log("\n\nRunning UpdateCurrencyDB");
}
db.sequelize
  .sync({})
  .then(runServer)
  .then(function () {
    updateCurrencyTable(db);
  });
