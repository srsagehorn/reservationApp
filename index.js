// * Create a basic server using Express.JS and heroku
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// start up express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// * Create a few array variables that will hold the data
var waitlist = [];

var tables = [];

// HTML get requests
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/reservations.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// post info to respective arrays based on number of tables available
app.post("/api/tables", function (req, res) {
  var newTable = req.body;
  if (tables.length <= 5) {
    tables.push(newTable);
    res.json(true);
  } else {
    waitlist.push(newTable);
    res.json(false);
  }
});

// starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening" + PORT);
});
