import { checkPermission } from "../../utils/check-permission/check-permission";
import { VERIFY_TOKEN } from "../../middleware/token/token-access";
import { upload, uploadToCloudinary } from "../../utils/cloudinary-image/image-upload";
import { UploadGolfCourse } from "../../controller/admin/upload-golf-course/upload-golf-course";
import { UploadCarrySet } from "../../controller/admin/upload-carry-set/upload-carry-set";
const uploadGolfCourse = new UploadGolfCourse()

const createCarrySet = new UploadCarrySet()
const  ImportantFolder={
    checkPermission:checkPermission,
    VERIFY_TOKEN:VERIFY_TOKEN,
    uploadToCloudinary:uploadToCloudinary,
    upload:upload,
    uploadGolfCourse:uploadGolfCourse,
    createCarrySet:createCarrySet

}
export default ImportantFolder





