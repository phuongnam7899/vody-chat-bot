"use strict";

import { viewEngine } from "./configs/viewEngine.js";
import express from "express";
import bodyParser from "body-parser";
import { initWebRoutes } from "./routes/web.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// Use dotenv to read .env vars into Node

// Set up view engine
viewEngine(app);

app.set("view engine", "ejs");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

initWebRoutes(app);

app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + process.env.PORT);
});

export default app;
