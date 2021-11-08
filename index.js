"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const fileRoutes = require("./routes/file-upload-routes");
const app = express();

require("dotenv").config();
app.use(morgan("dev", "immediate"));
app.use(cors());
require("./database")();
app.use("/api", fileRoutes.routes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}...`)
);

process.on("uncaughtException", function (err, req, res, next) {
  console.log("Node Server startup Error " + err);
});

module.exports = server;
