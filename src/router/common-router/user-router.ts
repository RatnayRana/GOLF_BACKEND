import express from "express";
import {
  authController,
  golfCourseBooking,
} from "../../utils/constant/constant";
import ImportantFolder from "../protected-router/api-constant";

const userRouter = express.Router();
//AUTHENTICATION
userRouter.post("/customer/signup", authController.createUser);
userRouter.post("/customer/signin", authController.createLogin);
userRouter.post("/customer/logout", authController.logout);

//Booking
userRouter.post(
  "/customer/booking-course/:golfCourseId/:carrySetId",
  ImportantFolder.VERIFY_TOKEN,
  golfCourseBooking.bookingGolfCourse
);
userRouter.post(
  "/customer/cancel-course/:BookingId",
  ImportantFolder.VERIFY_TOKEN,
  golfCourseBooking.cancelBooking
);

export default userRouter;
