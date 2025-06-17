import {
  TokenResponse,
  UserCreationResponse,
} from "../../interface/token/token-interface";
const secretKey = 'yourSecretKey';
import jwt, {JwtPayload} from 'jsonwebtoken';

const INACTIVITY_TIMEOUT = 1000000 * 1000
export const ACCESS_TOKEN = async (
  data: Partial<UserCreationResponse>
): Promise<TokenResponse> => {
  const payload = { ...data };

  const accessToken = await jwt.sign(payload, secretKey, {
    expiresIn: "5000s",
  });
  const refreshToken = jwt.sign(payload, secretKey, { expiresIn: "60000s" });
  return { accessToken, refreshToken };
};
