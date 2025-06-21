export interface loginCreationAttributes {
  id: number;
  email: string;
  customer_name?: string;
  phone_number: string;
}
export interface UserCreationResponse {
  status: number;
  message: string;
  data: Array<loginCreationAttributes>;
}
export interface TokenResponse {

  accessToken?: string;
  refreshToken?: string; // Optional, depending on your API response
}
export interface TokenPayload {
  id: number;
  email: string;
  customer_name: string;
  phone_number: string;
}