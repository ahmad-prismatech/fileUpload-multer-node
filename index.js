"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileRoutes = require("./routes/file-upload-routes");
const 
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

require("./database")();

app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use("/api", fileRoutes.routes);

app.listen(port, () =>
  console.log(`server is listening on port: ${port}`)
);
