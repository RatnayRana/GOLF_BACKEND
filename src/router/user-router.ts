import express from "express"
import { authController } from "../utils/constant/constant";


const userRouter = express.Router()

userRouter.post('/customer/signup',authController.createUser);
userRouter.post('/customer/signin',authController.createLogin);
userRouter.post('/customer/logout',authController.logout);



export default userRouter;