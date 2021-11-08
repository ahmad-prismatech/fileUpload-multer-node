"use strict";
const mongoose = require("mongoose");

module.exports = () => {
  const db =
    "mongodb+srv://augmentapp:augmentapp@cluster0.ualqx.mongodb.net/fileUpload?retryWrites=true&w=majority";
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log(`Connected to ${db} ......`));
};
