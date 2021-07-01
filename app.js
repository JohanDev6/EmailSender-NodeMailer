const express = require("express");
const indexRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
