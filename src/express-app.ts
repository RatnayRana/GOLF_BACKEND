import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // Import cookie-parser
import userRouter from "./router/user-router";

const configureExpressApp= async  (app: any) => {
  app.use(cors({ credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  //api
  app.use('/v1',userRouter)
};
export default configureExpressApp