import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // Import cookie-parser
import adminRouter from "./router/protected-router/admin-router";
import userRouter from "./router/common-router/user-router";

const configureExpressApp = async (app: any) => {
  app.use(cors({ credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  //api
  app.use("/v1", userRouter);

  //adminapi
  app.use("/v1/admin", adminRouter);
};
export default configureExpressApp;
