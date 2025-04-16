const express = require("express");
const app = express();
const userController = require("./controllers/userController");
const bodyParser = require("body-parser");
const port = 4000;

// body parser middleware
app.use(bodyParser.json());
// app.use(express.json());

// route
// app.get("/", function (req, res) {
//   res.send("Welcom to Express");
// });

// route
// app.get("/hello", userController.create);

// route
// app.get("/add", function (req, res) {
//   let num1 = req.query.num1;
//   let num2 = req.query.num2;

//   console.log(num1, num2);
//   let result = Number(num1) + Number(num2);
//   res.send({ sum: result });
// });

// user routes
app.post("/api/v1/users", userController.create);
app.get("/api/v1/users", userController.findAll);
app.get("/api/v1/users/:id", userController.findOne);

// blog routes
// app.post("/api/v1/blogs");
// app.get("/api/v1/blogs");
// app.get("/api/v1/blogs/:id");

// {
//   title : string,
//   content:string;
//   id: number;
// }

app.listen(port, function () {
  console.log("Server is running", port);
});
