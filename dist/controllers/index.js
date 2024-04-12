"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _homeController = require("./homeController.js");
Object.keys(_homeController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _homeController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _homeController[key];
    }
  });
});
var _webHooksController = require("./webHooksController.js");
Object.keys(_webHooksController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _webHooksController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _webHooksController[key];
    }
  });
});