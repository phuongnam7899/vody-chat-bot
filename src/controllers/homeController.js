import { postbackPayload } from "../constants/postbackPayload";

require("dotenv").config();
const request = require("request");
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const setupProfile = (req, res) => {
  // Construct the message body
  let requestBody = {
    get_started: { payload: postbackPayload.getStarted },
    whitelisted_domains: [
      "https://vody-facebook-chat-bot-a4118a8dfb66.herokuapp.com/",
    ],
    greeting: [
      {
        locale: "default",
        text: "Xin chào, {{user_first_name}}! Tôi là Vody 24/7 Chatbot. Tôi có thể cung cấp cho bạn thông tin về sản phẩm cũng như các chương trình khuyến mãi của Vody, hãy nhấn vào 'Bắt đầu' để bắt đầu trò chuyện với tôi!",
      },
    ],
  };

  // Send the HTTP request to the Messenger Platform
  request(
    {
      uri: "https://graph.facebook.com/v10.0/me/messenger_profile",
      qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
      method: "POST",
      json: requestBody,
    },
    (err, _res, _body) => {
      if (!err) {
        console.log("Profile set!");
        res.status(200).send("Profile set!");
      } else {
        console.error("Unable to set profile:" + err);
        res.sendStatus(500);
      }
    }
  );
};

export const homeController = {
  getHomePage,
  setupProfile,
};
