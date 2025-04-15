const express = require("express");
const app = express();

const port = 4000;
app.listen(port, function () {
  console.log("Server is running", port);
});

// route
app.get("/", function (req, res) {
  res.send("Welcom to Express");
});

// route
app.get("/hello", function (req, res) {
  let response = { message: "Hello World" };
  res.send(response);
});

// route
app.get("/add", function (req, res) {
  let num1 = req.query.num1;
  let num2 = req.query.num2;

  console.log(num1, num2);
  let result = Number(num1) + Number(num2);
  res.send({ sum: result });
});
