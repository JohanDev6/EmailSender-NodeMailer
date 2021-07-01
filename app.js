var express = require("express");

var indexRouter = require("./routes/index");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
