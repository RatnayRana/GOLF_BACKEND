import { Request, Response, NextFunction } from "express";
import SignUpAttributes from "../interface/SignUp/signup-interface";
import CustomerService from "../services/customer-service";
import { ApiResponse } from "../utils/response-handler/response-handler";
import { GenerateSalt } from "../utils/validation/validation";

export class Authcontroller {
  public service = new CustomerService();
  constructor() {
    this.createUser = this.createUser.bind(this);

    this.createLogin = this.createLogin.bind(this);
    this.logout = this.logout.bind(this)
  }
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      let salt = await GenerateSalt();
      const { customer_name, email, password, phone_number } = req.body;
      const { data } = await this.service.SignUp({
        customer_name,
        email,
        password,
        phone_number,
        salt,
      });
      return res.json(data);
    } catch (error: any) {
      next(error);
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        error.statusCode
      );
    }
  }
  async createLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { email, password } = req.body;
      const result = await this.service.SignIn({ email, password });
      console.log(result);
      if (!result) {
        return ApiResponse.error(res, "Invalid login credentials", 401);
      }

      const { data } = result;
      //   return res.json(data);
      return ApiResponse.success(res, "Successfully logged in", 200);
    } catch (error: any) {
      console.log(error);

      // For other errors, pass to error handler
      next(error);
    }
  }
  // Logout method
   logout = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<any> => {
    try {
      // Clear cookies
      res.clearCookie("accessToken", { 
        httpOnly: true, 
        secure: true, 
        sameSite: "strict" 
      });
      res.clearCookie("refreshToken", { 
        httpOnly: true, 
        secure: true, 
        sameSite: "strict" 
      });

      const success = await this.service.logout();

      if (success) {
        return ApiResponse.success(res, 'User logged out successfully', 200, {});
      }

      return ApiResponse.error(res, 'Failed to log out', 500);
    } catch (error: unknown) {
      next(error);
    }
  }
  
}
