"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _postbackPayload = require("../constants/postbackPayload.js");
var _dotenv = require("dotenv");
var _axios = _interopRequireDefault(require("axios"));
(0, _dotenv.config)();
var getHomePage = function getHomePage(req, res) {
  return res.render("home.ejs");
};
var setupProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var requestBody, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Construct the message body
          requestBody = {
            get_started: {
              payload: _postbackPayload.postbackPayload.getStarted
            },
            whitelisted_domains: ["https://vody-facebook-chat-bot-a4118a8dfb66.herokuapp.com/"],
            greeting: [{
              locale: "default",
              text: "Xin chào, {{user_first_name}}! Tôi là Vody 24/7 Chatbot. Hãy nhấn vào 'Bắt đầu' để bắt đầu trò chuyện với tôi!"
            }]
          }; // Send the HTTP request to the Messenger Platform
          _context.prev = 1;
          _context.next = 4;
          return (0, _axios["default"])({
            method: "post",
            url: "https://graph.facebook.com/v10.0/me/messenger_profile?access_token=".concat(process.env.PAGE_ACCESS_TOKEN),
            headers: {
              "Content-Type": "application/json"
            },
            data: requestBody
          });
        case 4:
          response = _context.sent;
          // handle response here
          console.log("Profile set!");
          res.status(200).send("Profile set!");
          _context.next = 15;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          // handle error here
          console.error(_context.t0.response.data);
          console.error(_context.t0.response.status);
          console.error(_context.t0.response.headers);
          res.sendStatus(500);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function setupProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var homeController = exports.homeController = {
  getHomePage: getHomePage,
  setupProfile: setupProfile
};