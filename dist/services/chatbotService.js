"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _callSendAPI = require("../utils/callSendAPI.js");
var handlePostbackNotFound = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(senderPsid, payload) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          response = {
            text: "Postback ".concat(payload, " not found!")
          };
          _context.next = 4;
          return (0, _callSendAPI.callSendAPI)(senderPsid, response);
        case 4:
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          reject(_context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function handlePostbackNotFound(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleGetStarted = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(senderPsid) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          response = {
            text: "C\u1EA3m \u01A1n {{user_first_name}}, t\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n?"
          };
          _context2.next = 4;
          return (0, _callSendAPI.callSendAPI)(senderPsid, response);
        case 4:
          _context2.next = 9;
          break;
        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          reject(_context2.t0);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return function handleGetStarted(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  handleGetStarted: handleGetStarted,
  handlePostbackNotFound: handlePostbackNotFound
};