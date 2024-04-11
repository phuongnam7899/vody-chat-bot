"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWebRoutes = void 0;
var _express = _interopRequireDefault(require("express"));
var _homeController = require("../controllers/homeController.js");
var _webHooksController = require("../controllers/webHooksController.js");
var router = _express["default"].Router();
var initWebRoutes = exports.initWebRoutes = function initWebRoutes(app) {
  router.get("/", _homeController.homeController.getHomePage);
  router.post("/setup-profile", _homeController.homeController.setupProfile);
  router.get("/webhook", _webHooksController.webHooksController.getWebhook);
  router.post("/webhook", _webHooksController.webHooksController.postWebhook);
  return app.use("/", router);
};