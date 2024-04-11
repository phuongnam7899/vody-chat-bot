"use strict";

const { homeController } = require("./controllers");
import { viewEngine } from "./configs/viewEngine";
import express from "express";
import { urlencoded, json } from "body-parser";
import { initWebRoutes } from "./routes/web";
require("dotenv").config();

const app = express();
// Use dotenv to read .env vars into Node

// Set up view engine
viewEngine(app);

app.set("view engine", "ejs");

// Parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// Parse application/json
app.use(json());

initWebRoutes(app);

app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + process.env.PORT);
});
