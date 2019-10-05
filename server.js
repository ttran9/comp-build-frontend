const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen(port);
