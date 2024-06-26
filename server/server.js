require("dotenv").config();
const routes = require("./route/master/route.js");
const routes_HR = require("./route/HR");
const PurchasingRoute = require("./route");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(PurchasingRoute);
app.use(routes);
app.use(routes_HR);
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
