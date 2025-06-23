import { CaddieAttributes } from "../../../interface/admin/caddie/caddie-interface";
import { SignInAttributes } from "../../../interface/signin/signin-interface";
import { DatabaseRegisterSttributes } from "../../../interface/SignUp/signup-interface";
import { errorHandler } from "../../../middleware/errorHandler/common-errror-handler";
import { ACCESS_TOKEN } from "../../../middleware/token/token-access";
import CaddieRepository from "../../../model/admin/caddie-repository/caddie-repository";
import { FormateData } from "../../../utils/validation/validation";

class CaddieService {
  repository: CaddieRepository;
  constructor() {
    this.repository = new CaddieRepository();
  }
  async createCaddie(userInputs: CaddieAttributes) {
    const { caddiename, availibility, urls } = userInputs;
    console.log("Inputs", userInputs);
    try {
      const caddie = await this.repository.createCaddie({
        caddiename,
        availibility,
        urls,
      });
      return FormateData({
        status: 200,
        data: caddie,
        message: "success message",
      });
    } catch (error: unknown) {
      return errorHandler(error);
    }
  }
  async deleteCaddieService(id: number) {
    try {
      const existingCustomer = await this.repository.deleteCaddie(id);
      return FormateData({ existingCustomer });
    } catch (error: unknown) {
      throw errorHandler(error);
    }
  }
}
export default CaddieService;
