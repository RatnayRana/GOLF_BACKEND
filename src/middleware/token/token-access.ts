import { NextFunction, Request, Response } from "express";
import {
  TokenResponse,
  UserCreationResponse,
} from "../../interface/token/token-interface";
const secretKey = "yourSecretKey";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../errorHandler/error-handler";
import { ApiResponse } from "../../utils/response-handler/response-handler";
interface TokenPayload {
  id: number;
  email: string;
  customer_name: string;
  phone_number: string;
}
const INACTIVITY_TIMEOUT = 1000000 * 1000;
export const ACCESS_TOKEN = async (
  data: TokenPayload
): Promise<TokenResponse> => {
  const payload = { ...data };

  const accessToken = await jwt.sign(payload, secretKey, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return { accessToken, refreshToken };
};
export const VERIFY_TOKEN = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  let TokenData;
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw new ForbiddenError("Access denied. No token provided");
    }
    if (token && token.startsWith("Bearer")) {
      TokenData = token.split(" ")[1];
    }
    try {
      const decoded = jwt.verify(TokenData!, secretKey); // ✅ use TokenData here
      
      (req as any).user = decoded;
   
      return next(); 
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        const refreshToken = token;
        if (!refreshToken) {
          throw new NotFoundError("Refresh token missing");
        }
      }

      throw new UnauthorizedError(`${error}`);
    }
  } catch (error) {
    return ApiResponse.error(
      res,
      error instanceof Error ? error.message : "An unexpected error occurred",
      401
    );
  }
};
