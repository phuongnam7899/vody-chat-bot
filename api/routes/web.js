import express from "express";
import { homeController } from "../controllers/homeController.js";
import { webHooksController } from "../controllers/webHooksController.js";

const router = express.Router();

export const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/setup-profile", homeController.setupProfile);
  router.get("/webhook", webHooksController.getWebhook);
  router.post("/webhook", webHooksController.postWebhook);
  return app.use("/", router);
};
