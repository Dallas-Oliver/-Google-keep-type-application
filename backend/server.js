const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const app = express();
app.use(bodyParser.json());

const notes = [];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/note', (req, res, next) => {
  const 
})

app.listen(5000, () => {
  console.log("listening on port 5000");
});
