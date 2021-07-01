const express = require("express");
const indexRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(process.env.PORT || 5000, "0.0.0.0", function () {
  console.log("Listening on port 3000");
});
