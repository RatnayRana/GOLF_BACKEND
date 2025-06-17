import { APIError } from "../custom-error/app-error";
import SignInAttributes from "../interface/signin/signin-interface";
import SignUpAttributes from "../interface/SignUp/signup-interface";
import { UserCreationResponse } from "../interface/token/token-interface";
import { errorHandler } from "../middleware/errorHandler/common-errror-handler";
import { ACCESS_TOKEN } from "../middleware/token/token-access";
import customerRepository from "../model/customer-repository";
import {
  FormateData,
  GeneratePassword,

  ValidatePassword,
} from "../utils/validation/validation";

class CustomerService {
  repository: customerRepository;
  constructor() {
    this.repository = new customerRepository();
  }
  async SignUp(userInputs: SignUpAttributes) {
    const { customer_name, email, password, phone_number, salt } = userInputs;
    try {
      let userPassword = await GeneratePassword(password, salt);
      const existingCustomer = await this.repository.createCustomer({
        email,
        password: userPassword,
        customer_name,
        phone_number,
        salt,
      });

      return FormateData({
        id: existingCustomer?.id,
        message: "success message",
      });
    } catch (error) {
      throw new APIError("Data Not found");
    }
  }
  async SignIn(userInputs: SignInAttributes) {
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
            email: existingCustomer.email,
            customer_name: existingCustomer.customer_name,
            phone_number: existingCustomer.phone_number,
          } as unknown as UserCreationResponse);
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
