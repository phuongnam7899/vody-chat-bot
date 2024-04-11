import { callSendAPI } from "../utils/callSendAPI.js";

const handlePostbackNotFound = async (senderPsid, payload) => {
  try {
    const response = {
      text: `Postback ${payload} not found!`,
    };
    await callSendAPI(senderPsid, response);
  } catch (e) {
    reject(e);
  }
};

const handleGetStarted = async (senderPsid) => {
  try {
    const response = {
      text: `Cảm ơn {{user_first_name}}, tôi có thể giúp gì cho bạn?`,
    };
    await callSendAPI(senderPsid, response);
  } catch (e) {
    reject(e);
  }
};

export default {
  handleGetStarted,
  handlePostbackNotFound,
};
