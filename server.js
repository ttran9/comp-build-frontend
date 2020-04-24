const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const frontend = path.join(__dirname, "dist/");

// map the requests to the static react build directory
app.use("/", express.static(frontend));

// all the unknown requests are redirected to the react SPA
app.use(function (req, res, next) {
  res.sendFile(path.join(frontend, "index.html"));
});

app.listen(port);
