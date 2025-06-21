import * as yup from "yup";

// Define the validation schema
const registerCutomerSchema = yup.object().shape({
  customer_name: yup.string().required("customer_name is required"),
  email: yup.string().email().required("email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  phone_number: yup
    .string()
    .required("phone_number is required")
    .min(8, "phone_number must be at least 8 characters")
});

export default registerCutomerSchema;
