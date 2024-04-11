import express from "express";

const router = express.Router();
import { homeController, webHooksController } from "../controllers";

export const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/setup-profile", homeController.setupProfile);
  router.get("/webhook", webHooksController.getWebhook);
  router.post("/webhook", webHooksController.postWebhook);
  return app.use("/", router);
};
