require("dotenv").config();

const app = require("express")();
var http = require("http").Server(app);

const paymentRoute = require("./routes/paymentRoute");
const database = require("./config/database");

app.use("/", paymentRoute);

http.listen(3000, function () {
  console.log("Server is running");
});
