import express from "express";

export const viewEngine = (app) => {
  app.use(express.static("api/public"));
  app.set("view engine", "ejs");
  app.set("views", "api/views");
};
