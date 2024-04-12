"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _viewEngine = require("./configs/viewEngine.js");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _web = require("./routes/web.js");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var app = (0, _express["default"])();
// Use dotenv to read .env vars into Node

// Set up view engine
(0, _viewEngine.viewEngine)(app);
app.set("view engine", "ejs");

// Parse application/x-www-form-urlencoded
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

// Parse application/json
app.use(_bodyParser["default"].json());
(0, _web.initWebRoutes)(app);
app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + process.env.PORT);
});