const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
module.exports = app;

//logging middleware
app.use(volleyball);

//body parsing middlweware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

//routes accessed via AJAX
app.use("/api", require("./api"));

//catch all urls resembling a file extension
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

//send index.html
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
