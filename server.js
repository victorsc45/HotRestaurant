// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const reservations = [];
// const waitlist = [];

// Routes
// =============================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Basic route that sends the user first to the AJAX Page


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
