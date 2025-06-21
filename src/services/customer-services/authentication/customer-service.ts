import { SignInAttributes } from "../../../interface/signin/signin-interface";
import { DatabaseRegisterSttributes } from "../../../interface/SignUp/signup-interface";
import { errorHandler } from "../../../middleware/errorHandler/common-errror-handler";
import { ACCESS_TOKEN } from "../../../middleware/token/token-access";
import customerRepository from "../../../model/customer/customer-repository/customer-repository";
import {
  FormateData,
  GeneratePassword,
  ValidatePassword,
} from "../../../utils/validation/validation";
import loginCutomerSchema from "../../../utils/Validator/customer/login-customer";
import registerCutomerSchema from "../../../utils/Validator/customer/regiester-customer";

class CustomerService {
  repository: customerRepository;
  constructor() {
    this.repository = new customerRepository();
  }
  async SignUp(userInputs: DatabaseRegisterSttributes) {
    await registerCutomerSchema.validate(userInputs)
    const { customer_name, email, password, phone_number, salt, roleId } =
      userInputs;
      console.log("Inputs",userInputs)
    try {
      let userPassword = await GeneratePassword(password, salt);
      const existingCustomer = await this.repository.createCustomer({
        email,
        password: userPassword,
        customer_name,
        phone_number,
        salt,
        roleId,
      });
      return FormateData({
        status:200,
        data:existingCustomer,
        message: "success message",
      });
    } catch (error:unknown) {
      return  errorHandler(error)
    }
  }
  async SignIn(userInputs: SignInAttributes) {
    await loginCutomerSchema.validate(userInputs)
    const { email, password } = userInputs;
    try {
      const existingCustomer = await this.repository.FindCustomer({ email });
      if (existingCustomer) {
        const validPassword = await ValidatePassword(
          password,
          existingCustomer.password,
          existingCustomer.salt
        );

        if (validPassword) {
          const token = await ACCESS_TOKEN({
            id: existingCustomer.id,
            email: existingCustomer.email,
            customer_name: existingCustomer.customer_name,
            phone_number: existingCustomer.phone_number,
          } );
         
          return FormateData({ token });
        }
      }
    
    } catch (error: unknown) {
      throw errorHandler(error); // Consolidated error handling
    }
  }
  // Logout method
  async logout(userId?: string): Promise<boolean> {
    // Invalidate refresh tokens in database
    // Add user to blacklist
    // Log the logout event
    return true;
  }
}
export default CustomerService;
