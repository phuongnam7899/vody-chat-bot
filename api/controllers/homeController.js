import { postbackPayload } from "../constants/postbackPayload.js";

import { config } from "dotenv";
config();
import axios from "axios";
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const setupProfile = async (req, res) => {
  // Construct the message body
  let requestBody = {
    get_started: { payload: postbackPayload.getStarted },
    whitelisted_domains: [
      "https://vody-chat-4daiscyss-nams-projects-81152b37.vercel.app/",
    ],
    greeting: [
      {
        locale: "default",
        text: "Xin chào, {{user_first_name}}! Tôi là Vody 24/7 Chatbot. Hãy nhấn vào 'Bắt đầu' để bắt đầu trò chuyện với tôi!",
      },
    ],
  };

  // Send the HTTP request to the Messenger Platform
  try {
    const response = await axios({
      method: "post",
      url: `https://graph.facebook.com/v10.0/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
      headers: { "Content-Type": "application/json" },
      data: requestBody,
    });
    // handle response here
    console.log("Profile set!");
    res.status(200).send("Profile set!");
  } catch (error) {
    // handle error here
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
    res.sendStatus(500);
  }
};

export const homeController = {
  getHomePage,
  setupProfile,
};
