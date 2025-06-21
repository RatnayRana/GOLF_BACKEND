interface SignUpAttributes {
  customer_name: string;
  email: string;
  password: string;
  phone_number: string;
  salt:string,

}

interface DatabaseRegisterSttributes extends SignUpAttributes{
  roleId:number
}

export {SignUpAttributes,DatabaseRegisterSttributes }