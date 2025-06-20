import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../../utils/response-handler/response-handler";
import { GenerateSalt } from "../../../utils/validation/validation";
import CustomerService from "../../../services/customer-services/authentication/customer-service";


export class Authcontroller {
  public service = new CustomerService();
  constructor() {
    this.createUser = this.createUser.bind(this);

    this.createLogin = this.createLogin.bind(this);
    this.logout = this.logout.bind(this);
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
        roleId: 1,
      });
      if(data){
        return res.json(data);
      }else{
        console.log("hello")
      }
      
    } catch (error: any) {
      console.log("GH")
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
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
      return ApiResponse.success(res, "Successfully logged in", 200, data);
    } catch (error: any) {
       return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        500
      );
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
        sameSite: "strict",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      const success = await this.service.logout();

      if (success) {
        return ApiResponse.success(
          res,
          "User logged out successfully",
          200,
          {}
        );
      }

      return ApiResponse.error(res, "Failed to log out", 500);
    } catch (error: unknown) {
      next(error);
    }
  };
}
