var express = require("express");
const { Mongoose } = require("mongoose");
app = express();
port = process.env.PORT || 3000;
mongoose = require("mongoose");
Task = require("./api/models/todoListModel");
bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes");
routes(app);

app.listen(port);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

console.log("Todo list Restful API server started on " + port);
