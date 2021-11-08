"use strict";
const mongoose = require("mongoose");

module.exports = function () {
  const db =
    "mongodb+srv://augmentapp:augmentapp@cluster0.ualqx.mongodb.net/fileUpload?retryWrites=true&w=majority";
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to ${db} ..`));
};
