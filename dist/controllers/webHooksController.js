"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webHooksController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _postbackPayload = require("../constants/postbackPayload.js");
var _chatbotService = _interopRequireDefault(require("../services/chatbotService.js"));
var _callSendAPI = require("../utils/callSendAPI.js");
var getWebhook = function getWebhook(req, res) {
  // Your verify token. Should be a random string.
  var VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  var mode = req.query["hub.mode"];
  var token = req.query["hub.verify_token"];
  var challenge = req.query["hub.challenge"];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};
var postWebhook = function postWebhook(req, res) {
  var body = req.body;

  // Checks if this is an event from a page subscription
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {
      // Gets the body of the webhook event
      var webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      // Get the sender PSID
      var senderPsid = webhookEvent.sender.id;
      console.log("Sender PSID: " + senderPsid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhookEvent.message) {
        handleMessage(senderPsid, webhookEvent.message);
      } else if (webhookEvent.postback) {
        handlePostback(senderPsid, webhookEvent.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};

// Handles messages events
function handleMessage(senderPsid, receivedMessage) {
  var response;

  // Checks if the message contains text
  if (receivedMessage.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of your request to the Send API
    response = {
      text: "You sent the message: '".concat(receivedMessage.text, "'. Now send me an attachment!")
    };
  } else if (receivedMessage.attachments) {
    // Get the URL of the message attachment
    var attachmentUrl = receivedMessage.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [{
            title: "Is this the right picture?",
            subtitle: "Tap a button to answer.",
            image_url: attachmentUrl,
            buttons: [{
              type: "postback",
              title: "Yes!",
              payload: "yes"
            }, {
              type: "postback",
              title: "No!",
              payload: "no"
            }]
          }]
        }
      }
    };
  }

  // Send the response message
  (0, _callSendAPI.callSendAPI)(senderPsid, response);
}

// Handles messaging_postbacks events
function handlePostback(_x, _x2) {
  return _handlePostback.apply(this, arguments);
}
function _handlePostback() {
  _handlePostback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(senderPsid, receivedPostback) {
    var payload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Get the payload for the postback
          payload = receivedPostback.payload; // Set the response based on the postback payload
          _context.t0 = payload;
          _context.next = _context.t0 === _postbackPayload.postbackPayload.getStarted ? 4 : 7;
          break;
        case 4:
          _context.next = 6;
          return _chatbotService["default"].handleGetStarted(senderPsid);
        case 6:
          return _context.abrupt("break", 10);
        case 7:
          _context.next = 9;
          return _chatbotService["default"].handlePostbackNotFound(senderPsid, payload);
        case 9:
          return _context.abrupt("break", 10);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _handlePostback.apply(this, arguments);
}
var webHooksController = exports.webHooksController = {
  postWebhook: postWebhook,
  getWebhook: getWebhook
};