import express from "express";
import ImportantFolder from "./api-constant";

const adminRouter = express.Router();

adminRouter.post(
  "/create-golf-course",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("Upload_Golf_Course"),
  ImportantFolder.uploadGolfCourse.uploadGolfCourse
);
adminRouter.post(
  "/create-caddie",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("Upload_Caddie"),
  ImportantFolder.upload.array("file", 5),
  ImportantFolder.uploadToCloudinary,
  ImportantFolder.caddieController.uploadCaddie
);
adminRouter.post(
  "/delete-caddie/:id",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("delete-caddie"),
  ImportantFolder.caddieController.deleteCaddie
);

adminRouter.post(
  "/create-carryset",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("Upload_carryset"),
  ImportantFolder.upload.array("file", 5),
  ImportantFolder.uploadToCloudinary,
  ImportantFolder.createCarrySet.addCarrySet
);
adminRouter.post(
  "/delete-carryset/:id",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("delete-carryset"),
  ImportantFolder.createCarrySet.deleteCarrySet
);
adminRouter.get(
  "/get-booking",
  ImportantFolder.VERIFY_TOKEN,
  ImportantFolder.checkPermission("get-booking"),
  ImportantFolder.bookingController.getBooking
);
// userRouter.post('/customer/signin',authController.createLogin);
// userRouter.post('/customer/logout',authController.logout);

export default adminRouter;
