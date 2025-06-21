import { APIError } from "../../../custom-error/app-error";
import { CarrySetAttributes } from "../../../interface/admin/upload-carry-set/upload-carry-set";
import { errorHandler } from "../../../middleware/errorHandler/common-errror-handler";
import AddCarrySetRepository from "../../../model/admin-repository/add-carryset-repository/add-carryset-repository";
import { FormateData } from "../../../utils/validation/validation";
import uploadCarrySetSchema from "../../../utils/Validator/admin/carry-set/carryset-validators";

class AddCarrySet {
  repository: AddCarrySetRepository;
  constructor() {
    this.repository = new AddCarrySetRepository();
  }
  async addCarrySetService(userUploadDetails: CarrySetAttributes) {
    await uploadCarrySetSchema.validate(userUploadDetails);
    const { carrysettname, availibility, urls } = userUploadDetails;
    try {
      const existingCustomer = await this.repository.createCarrySet({
        carrysettname,
        availibility,
        urls,
      });
      return FormateData({ existingCustomer });
    } catch (error) {
      throw errorHandler(error)
    }
  }

  async deleteCarrySetService(id: number) {
    try {
      const existingCustomer = await this.repository.deleteCarrySet(
        id,
      );
      return FormateData({ existingCustomer });
    } catch (error:unknown) {
      throw errorHandler(error)
    }
  }
}
export default AddCarrySet;
