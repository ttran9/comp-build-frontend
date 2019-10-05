const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(__dirname + "/dist/"));

app.listen(port);
