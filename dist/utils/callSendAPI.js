"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callSendAPI = callSendAPI;
function callSendAPI(senderPsid, response) {
  // The page access token we have generated in your app settings
  var PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  // Construct the message body
  var requestBody = {
    recipient: {
      id: senderPsid
    },
    message: response
  };

  // Send the HTTP request to the Messenger Platform
  request({
    uri: "https://graph.facebook.com/v2.6/me/messages",
    qs: {
      access_token: PAGE_ACCESS_TOKEN
    },
    method: "POST",
    json: requestBody
  }, function (err, _res, _body) {
    if (!err) {
      console.log("Message sent! ");
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}