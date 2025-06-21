import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../../config';
const GenerateSalt = async() =>{
    return await bcrypt.genSalt();
}
const GeneratePassword = async (password:string, salt:any) => {
  return await bcrypt.hash(password, salt);
};
const GenerateSignature = async (payload:any) => {
  try {
    return await jwt.sign(payload, APP_SECRET!, { expiresIn: "30d" });
  } catch (error) {
    return error;
  }
};

const FormateData = (data:any) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};
const ValidatePassword = async (
  enteredPassword:any,
  savedPassword:any,
  salt:any
) => {
  return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};

export {GenerateSalt,GeneratePassword,GenerateSignature,FormateData,ValidatePassword}