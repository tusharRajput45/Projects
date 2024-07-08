const mongoose = require("mongoose");

mongoose
  .connect("")
  .then(() => {
    console.log("Connect Successfully");
  })
  .catch(() => {
    console.log("Connect unsuccessfully");
  });
module.exports = mongoose;
