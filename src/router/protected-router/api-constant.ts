import { checkPermission } from "../../utils/check-permission/check-permission";
import { VERIFY_TOKEN } from "../../middleware/token/token-access";
import { upload, uploadToCloudinary } from "../../utils/cloudinary-image/image-upload";
import { UploadGolfCourse } from "../../controller/admin/upload-golf-course/upload-golf-course";
import { UploadCarrySet } from "../../controller/admin/upload-carry-set/upload-carry-set";
import { GetBookingcontroller } from "../../controller/admin/get-booking/get-booking";
import { CaddieController } from "../../controller/admin/caddie/caddie-controller";
const uploadGolfCourse = new UploadGolfCourse()

const createCarrySet = new UploadCarrySet()
const BookingController = new GetBookingcontroller()

const caddieController = new CaddieController()
const  ImportantFolder={
    checkPermission:checkPermission,
    VERIFY_TOKEN:VERIFY_TOKEN,
    uploadToCloudinary:uploadToCloudinary,
    upload:upload,
    uploadGolfCourse:uploadGolfCourse,
    createCarrySet:createCarrySet,
    bookingController:BookingController,
    caddieController:caddieController

}
export default ImportantFolder





